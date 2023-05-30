import { Injectable } from '@angular/core';
import { Observable, catchError, of, throwError } from 'rxjs';
import { ICards } from '../../interface/cards';
import { CARDS_LIST } from '../../mock';
@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor() { }
  get_mock(): Observable<ICards[]> {
    return of(CARDS_LIST).pipe(
      catchError(error => {
        return throwError(error.message || error.status || "server error");
      })
    )
  }
}
