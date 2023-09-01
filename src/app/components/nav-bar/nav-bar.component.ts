import { Component } from '@angular/core';
import { PageTabs } from 'src/app/Shared/interfaces';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent {

  NavBarPages:PageTabs[] = [
    {
      title: 'Home',
      link:'*'
    },
    {
      title: 'Gallery',
      link:'*'
    },   
    {
      title: 'Teams',
      link:'*'
    },
    {
      title: 'Abous Us',
      link:'*'
    },
    {
      title: 'Contact Us',
      link:'*'
    },
  ]

}
