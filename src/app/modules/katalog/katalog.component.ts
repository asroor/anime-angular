import { Component, OnInit } from '@angular/core';
import { IGanre, IYears } from 'src/app/interface';
import { GanreService } from 'src/app/shared/service/ganre.service';
import { YearsService } from 'src/app/shared/service/years.service';

@Component({
  selector: 'app-katalog',
  templateUrl: './katalog.component.html',
  styleUrls: ['./katalog.component.css'],
})
export class KatalogComponent implements OnInit {
  public ganre!: IGanre[];
  public years!: IYears[];
  constructor(private GS: GanreService, private YS: YearsService) {}
  ngOnInit(): void {
    this.GS.getGanre().subscribe((res) => {
      this.ganre = res;
      console.log(this.ganre);
    });
    this.YS.getYear().subscribe((res) => {
      this.years = res;
    });
  }
}
