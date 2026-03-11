import { InjectionToken } from '@angular/core';
import { Pagination } from '../../../core/interfaces';
import { Course } from '../domain/course';

export type CoursePort = {
  create(course: Course): Promise<Course>;
  getAll(): Promise<Course[]>;
  getById(id: number): Promise<Course | undefined>;
  update(course: Course): Promise<Course>;
  delete(id: number): Promise<void>;
  getByPage(page: number, pageSize: number): Promise<Pagination<Course>>;
};

export const COURSE_PORT = new InjectionToken<CoursePort>('COURSE_PORT');
