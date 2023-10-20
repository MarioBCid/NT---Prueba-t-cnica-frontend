import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { DigimonDescriptionComponent } from './views/digimon-description/digimon-description.component';
import { SearchComponent } from './views/search/search.component';
import { HelpComponent } from './views/help/help.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Search', component: SearchComponent },
  { path: 'Digimon/:id', component: DigimonDescriptionComponent },
  { path: 'Help', component: HelpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
