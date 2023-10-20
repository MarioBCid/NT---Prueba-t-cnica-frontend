import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Digimon, Evolution, SearchParams } from 'src/app/Interfaces/digimon.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() handleClick: () => void = () => {};
  @Input() searchParams = {} as SearchParams;
  @Output() ultimaImagenCargada = new EventEmitter<void>();
  @Input() data: any;

  constructor(private router: Router) {}

  openDigimon(id: number) {
    this.router.navigate(['/Digimon', id], { state: {searchParams: this.searchParams, scrollPosition: window.scrollY} });
  }

  imagenCargada() {
    this.ultimaImagenCargada.emit();
  }
}
