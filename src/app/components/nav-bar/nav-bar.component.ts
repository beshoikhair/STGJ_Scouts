import { Component } from '@angular/core';
import { PageTabs } from 'src/app/Shared/interfaces';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less'],
})
export class NavBarComponent {
  NavBarPages: PageTabs[] = [
    {
      title: 'Home',
      link: '*',
      sub_titles: [],
    },
    {
      title: 'Gallery',
      link: '*',
      sub_titles: [],
    },
    {
      title: 'Teams',
      link: '*',
      sub_titles: [
        {
          title: 'Teams Overview',
          link: '*',
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
          link: '*',
          sub_titles: [],
        },
        {
          title: 'Baden Powell',
          link: '*',
          sub_titles: [],
        },
      ],
    },
    {
      title: 'Contact Us',
      link: '*',
      sub_titles: [],
    },
  ];
}
