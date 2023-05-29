import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchPageComponent } from './components/watch-page/watch-page.component';
import { VideoComponent } from './components/video/video.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieAboutComponent } from './components/movie-about/movie-about.component';

const routes: Routes = [
  { path: '', component: WatchPageComponent }
]

@NgModule({
  declarations: [
    WatchPageComponent,
    VideoComponent,
    MovieAboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class WatchModule { }
