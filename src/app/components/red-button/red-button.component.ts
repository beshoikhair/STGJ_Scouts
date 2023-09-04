import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-red-button',
  templateUrl: './red-button.component.html',
  styleUrls: ['./red-button.component.less'],
})
export class RedButtonComponent {
  @Input() text = '';
}
