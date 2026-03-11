import { inject, Injectable, signal } from '@angular/core';
import { firstValueFrom, of } from 'rxjs';
import { Pagination } from '../../../core/interfaces';
import { Notification } from '../../../shared/services';
import { Course } from '../domain/course';
import { COURSE_PORT, CoursePort } from '../ports/course.port';

@Injectable({
  providedIn: 'root',
})
export class CourseApplication {
  private readonly notification = inject(Notification);
  private readonly port: CoursePort = inject(COURSE_PORT);

  private $courses = signal<Course[]>([]);
  public courses = this.$courses.asReadonly();

  private $length = signal<number>(0);
  public length = this.$length.asReadonly();

  private $pageSize = signal<number>(30);
  public pageSize = this.$pageSize.asReadonly();

  private $currentPage = signal<number>(0);

  async getByPage(page: number, pageSize: number) {
    const response: Array<Pagination<Course>> = await firstValueFrom(
      of([await this.port.getByPage(page, pageSize)]),
    );
    console.log(response);
    this.$currentPage.set(page);
    this.$courses.set(response[0].items);
    this.$length.set(response[0].total);
    this.$pageSize.set(response[0].pageSize);
    return;
  }

  async getById(id: number) {
    const course = await this.port.getById(id);

    if (!course) {
      this.notification.show('Course not found.');
    }
    return course;
  }

  async create(course: Course) {
    const createdCourse = await this.port.create(course);
    await this.getByPage(this.$currentPage(), this.$pageSize());
    this.notification.show('Course created successfully.');
    return createdCourse;
  }

  async update(course: Course) {
    const updatedCourse = await this.port.update(course);
    await this.getByPage(this.$currentPage(), this.$pageSize());
    this.notification.show('Course updated successfully.');
    return updatedCourse;
  }

  async delete(id: number) {
    await this.port.delete(id);
    await this.getByPage(this.$currentPage(), this.$pageSize());
    this.notification.show('Course deleted successfully.');
  }
}
