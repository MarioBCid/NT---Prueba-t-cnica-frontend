import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './views/home/home.component';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './shared/layout/layout.component';
import { DigimonDescriptionComponent } from './views/digimon-description/digimon-description.component';
import { HelpComponent } from './views/help/help.component';
import { DigimonComponent } from './shared/digimon/digimon.component';
import { TableComponent } from './shared/table/table.component';
import { SearchComponent } from './views/search/search.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    DigimonComponent,
    LayoutComponent,
    TableComponent,
    DigimonDescriptionComponent,
    HelpComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
