import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RedButtonComponent } from './red-button/red-button.component';
import { YellowButtonComponent } from './yellow-button/yellow-button.component';
import { YellowTextButtonComponent } from './yellow-text-button/yellow-text-button.component';

@NgModule({
  declarations: [
    NavBarComponent,
    RedButtonComponent,
    YellowButtonComponent,
    YellowTextButtonComponent,
  ],
  imports: [CommonModule],
  exports: [
    NavBarComponent,
    RedButtonComponent,
    YellowButtonComponent,
    YellowTextButtonComponent,
  ],
})
export class ComponentsModule {}
