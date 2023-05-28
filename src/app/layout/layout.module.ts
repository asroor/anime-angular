import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: 'home', loadChildren: () => import('../modules').then(m => m.HomeModule) },
      { path: 'watch', loadChildren: () => import('../modules').then((m) => m.WatchModule) },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'profile', loadChildren: () => import('../modules').then(m => m.ProfilModule) }
    ]
  }
]

@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ]
})
export class LayoutModule { }
