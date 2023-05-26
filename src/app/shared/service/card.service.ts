import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICards } from '../../interface/cards';
import { CARDS_LIST } from '../../mock';
@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor() { }
  get_mock(): Observable<ICards[]> {
    return of(CARDS_LIST)
  }
}
