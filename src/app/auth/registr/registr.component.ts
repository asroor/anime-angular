import { Component, } from '@angular/core';
import { ShowService } from 'src/app/shared/service';
@Component({
  selector: 'app-registr',
  templateUrl: './registr.component.html',
  styleUrls: ['./registr.component.css']
})
export class RegistrComponent {
  hide: boolean = true
  show() {
    this.hide ? this.hide = false : this.hide = true;
  }
}
