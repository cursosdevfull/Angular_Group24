import { Component, input } from '@angular/core';

@Component({
  selector: 'cdev-scrollbar',
  imports: [],
  templateUrl: './scrollbar.html',
  styleUrl: './scrollbar.scss',
  host: {
    '[style]': 'customStyle()',
  },
})
export class Scrollbar {
  customStyle = input<string>('');
}
