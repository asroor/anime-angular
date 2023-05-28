import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { CardsComponent } from './components/cards/cards.component';
import { CardComponent } from './components/card/card.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CorauselComponent } from './components/corausel/corausel.component';
import { SharedModule } from "../../shared/shared.module";

const routes: Routes = [
  { path: '', component: HomePageComponent },
]

@NgModule({
  declarations: [
    HomePageComponent,
    CardsComponent,
    CardComponent,
    SidebarComponent,
    CorauselComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
