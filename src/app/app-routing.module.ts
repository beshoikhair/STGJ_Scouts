import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TeamsOverviewPageComponent } from './pages/teams-overview-page/teams-overview-page.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { AboutUsStgjScoutsComponent } from './pages/about-us-stgj-scouts/about-us-stgj-scouts.component';
import { AboutUsBadenPowellComponent } from './pages/about-us-baden-powell/about-us-baden-powell.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'home', component: HomePageComponent },
  { path: 'teams', redirectTo: 'teams/teams-overview', pathMatch: 'full' },
  { path: 'teams/teams-overview', component: TeamsOverviewPageComponent },
  { path: 'gallery', component: GalleryPageComponent },
  { path: 'about-us', redirectTo: 'about-us/stgj-scouts', pathMatch: 'full' },
  { path: 'about-us/stgj-scouts', component: AboutUsStgjScoutsComponent },
  { path: 'about-us/baden-powell', component: AboutUsBadenPowellComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
