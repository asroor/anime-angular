import { Component, Input } from '@angular/core';
import { IGanre, IYears } from 'src/app/interface';

@Component({
  selector: 'app-ganre',
  templateUrl: './ganre.component.html',
  styleUrls: ['./ganre.component.css'],
})
export class GanreComponent {
  @Input('title') title: IGanre[] = [];
  @Input('year') years: IYears[] = [];
}
