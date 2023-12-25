import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { HomePageComponent } from './home-page/home-page.component';
import { TeamsOverviewPageComponent } from './teams-overview-page/teams-overview-page.component';
import { AboutUsStgjScoutsComponent } from './about-us-stgj-scouts/about-us-stgj-scouts.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
    TeamsOverviewPageComponent,
    AboutUsStgjScoutsComponent,
    GalleryPageComponent,
  ],
  imports: [CommonModule, ComponentsModule],
  exports: [
    HomePageComponent,
    TeamsOverviewPageComponent,
    AboutUsStgjScoutsComponent,
    GalleryPageComponent,
  ],
})
export class PagesModule {}
