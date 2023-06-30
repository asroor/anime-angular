import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IYears } from 'src/app/interface';
import { YEAR_LISTS } from 'src/app/mock/years.mock';

@Injectable({
  providedIn: 'root',
})
export class YearsService {
  public year: IYears[] = YEAR_LISTS;
  constructor() {}
  getYear(): Observable<IYears[]> {
    return of(this.year);
  }
}
