import { Component } from '@angular/core';
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
}
