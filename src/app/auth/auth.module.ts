import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { RegistrComponent } from './registr/registr.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistrComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
