import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { HomePageComponent } from './home-page/home-page.component';
import { TeamsOverviewPageComponent } from './teams-overview-page/teams-overview-page.component';

@NgModule({
  declarations: [HomePageComponent, TeamsOverviewPageComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [HomePageComponent, TeamsOverviewPageComponent],
})
export class PagesModule {}
