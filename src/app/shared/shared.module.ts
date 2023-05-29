import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { RightCardComponent } from './components/right-card/right-card.component';
import { RightbarComponent } from './components/rightbar/rightbar.component';


@NgModule({
  declarations: [FooterComponent, RightCardComponent, RightbarComponent],
  imports: [
    CommonModule
  ],
  exports: [FooterComponent, RightbarComponent]
})
export class SharedModule { }
