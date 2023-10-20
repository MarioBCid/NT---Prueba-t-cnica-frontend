import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { stateRoute } from 'src/app/Interfaces/digimon.model';

@Component({
  selector: 'app-digimon-description',
  templateUrl: './digimon-description.component.html',
  styleUrls: ['./digimon-description.component.scss']
})
export class DigimonDescriptionComponent {

  constructor(private router: Router) {}

  navigationState = {} as stateRoute;

  ngOnInit() {
    this.navigationState = window.history.state;
  }

  handleBack() {
    this.router.navigate(['/Search'], { state: {...this.navigationState} });
  }
}
