import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor(private http: HttpClient) { }
  private API = 'http://www.omdbapi.com/?apikey=c090e3d6&s=panda'
}
