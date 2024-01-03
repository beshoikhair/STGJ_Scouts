import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RedButtonComponent } from './red-button/red-button.component';
import { YellowButtonComponent } from './yellow-button/yellow-button.component';
import { YellowTextButtonComponent } from './yellow-text-button/yellow-text-button.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavBarComponent,
    RedButtonComponent,
    YellowButtonComponent,
    YellowTextButtonComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    NavBarComponent,
    RedButtonComponent,
    YellowButtonComponent,
    YellowTextButtonComponent,
    FooterComponent,
  ],
})
export class ComponentsModule {}
