import { CommonModule } from '@angular/common';
import { KatalogComponent } from './katalog.component';
import { RouterModule, Routes } from '@angular/router';
import { CatalogAnimeComponent } from './components/catalog-anime/catalog-anime.component';
import { GanreComponent } from './components/ganre/ganre.component';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: KatalogComponent,
  },
];

@NgModule({
  declarations: [KatalogComponent, CatalogAnimeComponent, GanreComponent],
  imports: [SharedModule, CommonModule, RouterModule.forChild(routes)],
})
export class KatalogModule {}
