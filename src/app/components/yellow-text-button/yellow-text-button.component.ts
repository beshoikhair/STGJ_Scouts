import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-yellow-text-button',
  templateUrl: './yellow-text-button.component.html',
  styleUrls: ['./yellow-text-button.component.less'],
})
export class YellowTextButtonComponent {
  @Input() text = 'Yellow Text Button';
}
