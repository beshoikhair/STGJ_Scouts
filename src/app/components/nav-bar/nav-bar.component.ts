import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PageTabs } from 'src/app/Shared/interfaces';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less'],
})
export class NavBarComponent {
  constructor(private router: Router) {}
  NavBarPages: PageTabs[] = [
    {
      title: 'Home',
      link: '../home',
      sub_titles: [],
    },
    {
      title: 'Gallery',
      link: '../gallery',
      sub_titles: [],
    },
    {
      title: 'Teams',
      link: '*',
      sub_titles: [
        {
          title: 'Teams Overview',
          link: '../teams/teams-overview',
          sub_titles: [],
        },
        {
          title: 'Louveteaux',
          link: '*',
          sub_titles: [],
        },
        {
          title: 'Louvettes',
          link: '*',
          sub_titles: [],
        },
        {
          title: 'Aventuriers',
          link: '*',
          sub_titles: [],
        },
        {
          title: 'Pioneers',
          link: '*',
          sub_titles: [],
        },
        {
          title: 'Leaders',
          link: '*',
          sub_titles: [],
        },
      ],
    },
    {
      title: 'About Us',
      link: '*',
      sub_titles: [
        {
          title: 'STGJ Scouts',
          link: '../about-us/stgj-scouts',
          sub_titles: [],
        },
        {
          title: 'Baden Powell',
          link: '../about-us/baden-powell',
          sub_titles: [],
        },
      ],
    },
    {
      title: 'Contact Us',
      link: 'footer',
      sub_titles: [],
    },
  ];

  getCurrentUrl(): string {
    console.log(this.router.url);
    return this.router.url;
  }
}
