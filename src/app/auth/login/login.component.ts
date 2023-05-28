import { Component } from '@angular/core';
import { ShowService } from 'src/app/shared/service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide: boolean = true
  show() {
    this.hide ? this.hide = false : this.hide = true;
  }
} 
