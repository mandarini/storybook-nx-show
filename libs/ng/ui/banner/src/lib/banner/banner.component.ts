import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-nx-show-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent {
  @Input() text = 'Hello world';
  @Input() backgroundColor = '#FF00FF66';
  @Input() borderColor = '#FF00FF';
  @Input() borderWidth = 4;
  @Input() width = 350;
  @Input() height = 50;
}
