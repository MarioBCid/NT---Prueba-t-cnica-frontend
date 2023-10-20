import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { DigimonLevel, Digimon, DigimonAttribute, SearchParams } from 'src/app/Interfaces/digimon.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  freeText: string = '';
  selectedOption1: string = '';
  selectedOption2: string = '';
  selectedOption3: number = 10;
  page: number = 0;
  loadScroll: number = 0;
  attributeList : DigimonAttribute[] = [];
  levelList : DigimonLevel[] = [];
  digimonList: Digimon[] = [];
  totalPages: number = 0;
  pageOptions: number[] = [10, 25, 50, 100];
  isLoading: boolean = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadFilters();
    this.loadMaestros();
    this.search();
  }

  loadFilters() {
    const navigationState = window.history?.state?.searchParams;
    console.log(navigationState);
    if (navigationState) {
      this.freeText = navigationState.freeText;
      this.selectedOption1 = navigationState.selectedOption1;
      this.selectedOption2 = navigationState.selectedOption2;
      this.selectedOption3 = navigationState.selectedOption3;
      this.page = navigationState.page;
      this.loadScroll = window.history?.state?.scrollPosition;
    }
  }

  handleSearch() {
    this.page = 0;
    this.search();
  }

  search() {
    this.isLoading = true;
    const params = {
      digimonName: this.freeText,
      attribute: this.selectedOption1,
      level: this.selectedOption2,
      page: this.page,
      elements: this.selectedOption3
    };
    this.dataService.getDigimonList(params).subscribe(
      {
        next: result => {
          this.digimonList = result.content;
          this.totalPages = result.pageable.totalPages;
          this.isLoading = false;
        },
        error: error=>console.log(error),
      }
    );
  }

  ngAfterViewInit() {
    window.scrollTo(0, 800);
  }

  clear() {
    this.freeText = '';
    this.selectedOption1 = '';
    this.selectedOption2 = '';
    this.selectedOption3 = 10;
    this.page = 0;
    this.search();
  }

  getSearchParams() {
    return {
      freeText: this.freeText,
      selectedOption1: this.selectedOption1,
      selectedOption2: this.selectedOption2,
      selectedOption3: this.selectedOption3,
      page: this.page,
    } as SearchParams;
  }

  imagenCargada() {
    if (this.loadScroll) {
      window.scrollTo(0, this.loadScroll);
      this.loadScroll = 0;
    }
  }

  handlePage(nextPage: boolean) {
    window.scrollTo(0, 0);
    this.page = this.page + (nextPage ? 1 : -1);
    this.search();
  }

  isButtonDisabled(nextPage: boolean) {
    if (nextPage) {
      return this.page >= this.totalPages;
    } else {
      return this.page <= 0;
    }
  }

  loadMaestros() {
    this.dataService.getAttributeList().subscribe(
      {
        next: result => {
          this.attributeList = result.content.fields;
        },
        error: error=>console.log(error),
      }
    );
    this.dataService.getLevelList().subscribe(
      {
        next: result => {
          this.levelList = result.content.fields;
        },
        error: error=>console.log(error),
      }
    );
  }
}
