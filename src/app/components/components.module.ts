import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RedButtonComponent } from './red-button/red-button.component';

@NgModule({
  declarations: [NavBarComponent, RedButtonComponent],
  imports: [CommonModule],
  exports: [NavBarComponent, RedButtonComponent],
})
export class ComponentsModule {}
