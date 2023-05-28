import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor() { }
  hide: boolean = true
  show() {
    this.hide ? this.hide = false : this.hide = true
  }
}
