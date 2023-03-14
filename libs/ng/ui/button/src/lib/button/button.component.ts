import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-nx-show-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() text = 'Click me';
  @Input() color = '#ddffdd';
  @Input() disabled = false;
}
