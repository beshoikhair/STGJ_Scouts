import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'STGJ_Scouts_Website';

  clickFunction(who: string) {
    alert(who + ' is Clicked');
  }
}
