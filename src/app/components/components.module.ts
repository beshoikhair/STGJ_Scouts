import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RedButtonComponent } from './red-button/red-button.component';
import { YellowButtonComponent } from './yellow-button/yellow-button.component';

@NgModule({
  declarations: [NavBarComponent, RedButtonComponent, YellowButtonComponent],
  imports: [CommonModule],
  exports: [NavBarComponent, RedButtonComponent, YellowButtonComponent],
})
export class ComponentsModule {}
