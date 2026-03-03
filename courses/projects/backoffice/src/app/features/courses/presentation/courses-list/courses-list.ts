import { Component } from '@angular/core';
import { Title } from '@shared/components/title/title';
import { TitleInfo } from '../../../../shared/types/title-info';

@Component({
  selector: 'cdev-courses-list',
  imports: [Title],
  templateUrl: './courses-list.html',
  styleUrl: './courses-list.scss',
})
export class CoursesList {
  public titleInfo: TitleInfo = {
    title: 'Courses',
    icon: 'school',
  };
}
