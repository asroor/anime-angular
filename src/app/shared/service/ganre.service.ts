import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IGanre } from 'src/app/interface';
import { GANRE_LIST } from 'src/app/mock/ganre.mock';

@Injectable({ providedIn: 'platform' })
export class GanreService {
  public ganre: IGanre[] = GANRE_LIST;
  constructor() {}
  getGanre(): Observable<IGanre[]> {
    return of(this.ganre);
  }
}
