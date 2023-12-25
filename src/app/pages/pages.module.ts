import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { HomePageComponent } from './home-page/home-page.component';
import { TeamsOverviewPageComponent } from './teams-overview-page/teams-overview-page.component';
import { AboutUsStgjScoutsComponent } from './about-us-stgj-scouts/about-us-stgj-scouts.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { AboutUsBadenPowellComponent } from './about-us-baden-powell/about-us-baden-powell.component';

@NgModule({
  declarations: [
    HomePageComponent,
    TeamsOverviewPageComponent,
    AboutUsStgjScoutsComponent,
    GalleryPageComponent,
    AboutUsBadenPowellComponent,
  ],
  imports: [CommonModule, ComponentsModule],
  exports: [
    HomePageComponent,
    TeamsOverviewPageComponent,
    AboutUsStgjScoutsComponent,
    GalleryPageComponent,
    AboutUsBadenPowellComponent,
  ],
})
export class PagesModule {}
