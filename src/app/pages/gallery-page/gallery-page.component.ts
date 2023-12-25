import { Component } from '@angular/core';
export interface GalleryYearInfo {
  startingYear: number;
  imageSrc: String;
}
@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.less'],
})
export class GalleryPageComponent {
  StgjScoutsGallery: GalleryYearInfo[] = [
    {
      startingYear: 2017,
      imageSrc: 'assets/images/Gallery/2017-2018.png',
    },
    {
      startingYear: 2018,
      imageSrc: 'assets/images/Gallery/2018-2019.png',
    },
    {
      startingYear: 2019,
      imageSrc: 'assets/images/Gallery/2019-2020.png',
    },
    {
      startingYear: 2020,
      imageSrc: 'assets/images/Gallery/2020-2021.png',
    },
    {
      startingYear: 2021,
      imageSrc: 'assets/images/Gallery/2021-2022.png',
    },
    {
      startingYear: 2022,
      imageSrc: 'assets/images/Gallery/2022-2023.JPEG',
    },
    {
      startingYear: 2023,
      imageSrc: 'assets/images/Gallery/2023-2024.jpg',
    },
  ];
}
