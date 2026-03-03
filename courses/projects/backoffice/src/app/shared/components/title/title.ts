import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TitleInfo } from '../../types/title-info';

@Component({
  selector: 'cdev-title',
  imports: [MatIconModule],
  templateUrl: './title.html',
  styleUrl: './title.scss',
})
export class Title {
  titleInfo = input.required<TitleInfo>();
}
