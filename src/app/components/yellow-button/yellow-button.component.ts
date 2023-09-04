import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-yellow-button',
  templateUrl: './yellow-button.component.html',
  styleUrls: ['./yellow-button.component.less'],
})
export class YellowButtonComponent {
  @Input() text = 'Yellow Button';
}
