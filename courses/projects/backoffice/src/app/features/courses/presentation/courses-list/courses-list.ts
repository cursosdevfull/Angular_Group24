import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Paginator, Table, Title } from '@shared/components';
import { Modal, Notification } from '@shared/services';
import { TitleInfo } from '@shared/types';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
import { CourseApplication } from '../../application/course.application';
import { Course } from '../../domain/course';
import { metaColumnsCourse } from '../../utils/columns/course';
import { CourseForm } from '../course-form/course-form';

@Component({
  selector: 'cdev-courses-list',
  imports: [Title, Table, Paginator, MatButtonModule, MatTableModule, MatIconModule],
  templateUrl: './courses-list.html',
  styleUrl: './courses-list.scss',
})
export class CoursesList {
  private readonly application = inject(CourseApplication);
  private readonly notification = inject(Notification);
  private readonly modal = inject(Modal);

  public titleInfo: TitleInfo = {
    title: 'Courses',
    icon: 'school',
  };

  public courses = this.application.courses;
  public length = this.application.length;
  public pageSize = this.application.pageSize;
  private currentPage = 0;
  public metaColumns = metaColumnsCourse;

  constructor() {
    this.application.getByPage(this.currentPage, 20);
  }

  changePage(page: number) {
    this.currentPage = page;
    this.application.getByPage(this.currentPage, this.pageSize());
  }

  async delete(evt: any, id: number) {
    evt.stopPropagation();
    const response = await firstValueFrom(this.notification.confirm());
    if (!response) {
      return;
    } else {
      this.application.delete(id);
    }
  }

  openForm(data: any = null) {
    const reference = this.modal.open(CourseForm, 'course-form', data);

    reference.subscribe({
      next: async (result) => {
        if (result.id && result.id > 0) {
          const course = new Course(result.title, result.id);
          await this.application.update(course);
        } else {
          const course = new Course(result.title);
          await this.application.create(course);
        }
      },
      error: console.log,
    });
  }
}
