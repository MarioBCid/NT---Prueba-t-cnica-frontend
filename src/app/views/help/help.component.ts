import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Field, SingleField } from 'src/app/Interfaces/digimon.model';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent {
  attributeList = [] as Field[];
  levelList = [] as Field[];
  fieldList = [] as Field[];
  itemLoaded = {} as SingleField;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadMaestros()
  }

  showSpinner() {
    return this.levelList.length && this.fieldList.length && this.attributeList.length;
  }

  handleClick(url: string) {
    this.dataService.getItem(url).subscribe(
      {
        next: result => {
          this.itemLoaded = result;
        },
        error: error => console.log(error),
      }
    );
  }

  loadMaestros() {
    this.dataService.getAttributeList().subscribe(
      {
        next: result => {
          this.attributeList = result.content.fields;
        },
        error: error => console.log(error),
      }
    );

    this.dataService.getLevelList().subscribe(
      {
        next: result => {
          this.levelList = result.content.fields;
        },
        error: error => console.log(error),
      }
    );

    this.dataService.getFieldList().subscribe(
      {
        next: result => {
          this.fieldList = result.content.fields;
        },
        error: error => console.log(error),
      }
    );
  }
}
