import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { DetailedDigimon, Digimon, Evolution } from '../../Interfaces/digimon.model';
import { getRandomId } from '../functions';

@Component({
  selector: 'app-digimon',
  templateUrl: './digimon.component.html',
  styleUrls: ['./digimon.component.scss']
})
export class DigimonComponent {
  prevEvo: Evolution[] = [];
  postEvo: Evolution[] = [];
  digimonId: number | undefined;
  interval = {} as ReturnType<typeof setInterval>;
  isLoading: boolean = false;
  data: any;
  
  constructor(private dataService: DataService, private route: ActivatedRoute) {
    route.params.subscribe(() => {
      this.route.params.subscribe(params => {
        this.digimonId = params['id'];
      })

      this.loadItem(this.digimonId, true);

      if (!this.digimonId) {
        this.interval = setInterval(() => {
          this.loadItem(this.digimonId, false)
        }, 15000);
      }
    });
  }

  loadItem(id?: number, spinner?: boolean) {
    if (spinner) this.isLoading = true;
    this.dataService.getData(id ?? getRandomId()).subscribe(
      {
        next: result => {
          this.data = result;
          this.prevEvo = result.priorEvolutions;
          this.postEvo = result.nextEvolutions;
          this.isLoading = false;
        },
        error: error=>console.log(error),
      }
    );
  }

  isTableVisible(list: Evolution[]) {
    return list.find((item) => item.id);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}







