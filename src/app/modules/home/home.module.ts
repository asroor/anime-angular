import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCorauselComponent } from './components/home-corausel/home-corausel.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeCorauselComponent }
]

@NgModule({
  declarations: [
    HomeCorauselComponent,
    HomePageComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class HomeModule { }
