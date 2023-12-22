import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { HomePageComponent } from './home-page/home-page.component';
import { TeamsOverviewPageComponent } from './teams-overview-page/teams-overview-page.component';
import { AboutUsStgjScoutsComponent } from './about-us-stgj-scouts/about-us-stgj-scouts.component';

@NgModule({
  declarations: [
    HomePageComponent,
    TeamsOverviewPageComponent,
    AboutUsStgjScoutsComponent,
  ],
  imports: [CommonModule, ComponentsModule],
  exports: [
    HomePageComponent,
    TeamsOverviewPageComponent,
    AboutUsStgjScoutsComponent,
  ],
})
export class PagesModule {}
