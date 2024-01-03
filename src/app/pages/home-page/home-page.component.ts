import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
interface TeamStats {
  teamName: string;
  teamNumbers: number;
}
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less'],
})
export class HomePageComponent {
  currentYearSlogan: string = 'SELF-DISCIPLINE';

  scoutTeams: TeamStats[] = [
    {
      teamName: 'Louveteaux',
      teamNumbers: 27,
    },
    {
      teamName: 'Louvettes',
      teamNumbers: 41,
    },
    {
      teamName: 'Aventuries',
      teamNumbers: 50,
    },
    {
      teamName: 'Pioneers',
      teamNumbers: 7,
    },
    {
      teamName: 'Leaders',
      teamNumbers: 25,
    },
  ];

  constructor(private router: Router) {}

  goToAboutUsStgjScouts() {
    this.router.navigate(['../about-us/stgj-scouts']);
  }

  goToAboutUsStgjScoutsCalendar() {
    this.navigateToDestinationPageSection(
      '../about-us/stgj-scouts',
      'calendar-section'
    );
  }

  goToGallery() {
    this.router.navigate(['../gallery']);
  }

  goToTeamsOverview() {
    this.router.navigate(['../teams/teams-overview']);
  }

  goToAboutUsStgjScoutsFaqs() {
    this.navigateToDestinationPageSection(
      '../about-us/stgj-scouts',
      'faq-section'
    );
  }

  navigateToDestinationPageSection(pageUrl: string, pageSectionId: string) {
    const navigationExtras: NavigationExtras = {
      fragment: pageSectionId,
    };
    this.router.navigate([pageUrl], navigationExtras);
  }
}
