import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PremiumComponent } from './components/premium/premium.component';

@NgModule({
  declarations: [PremiumComponent],
  imports: [CommonModule],
  exports: [PremiumComponent],
})
export class SharedModule {}
