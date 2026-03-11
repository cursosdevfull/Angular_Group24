import { Pagination } from '../../../core/interfaces';
import { Course } from '../domain/course';
import { CoursePort } from '../ports/course.port';
import { MOCK_COURSES } from './mock-courses';

export class CourseAdapter implements CoursePort {
  create(course: Course): Promise<Course> {
    MOCK_COURSES.push(course);
    return Promise.resolve(course);
  }

  getAll(): Promise<Course[]> {
    return Promise.resolve(MOCK_COURSES);
  }

  getById(id: number): Promise<Course | undefined> {
    const course = MOCK_COURSES.find((c) => c.properties.id === id);
    return Promise.resolve(course);
  }

  update(course: Course): Promise<Course> {
    const { id } = course.properties;

    const index = MOCK_COURSES.findIndex((c) => c.properties.id === id);
    if (index === -1) {
      return Promise.reject(new Error('Course not found'));
    }
    MOCK_COURSES[index] = course;
    return Promise.resolve(course);
  }

  delete(id: number): Promise<void> {
    const index = MOCK_COURSES.findIndex((c) => c.properties.id === id);
    if (index === -1) {
      return Promise.reject(new Error('Course not found'));
    }
    MOCK_COURSES.splice(index, 1);
    return Promise.resolve();
  }

  getByPage(page: number, pageSize: number): Promise<Pagination<Course>> {
    const startIndex = page * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedCourses = MOCK_COURSES.slice(startIndex, endIndex);

    return Promise.resolve({
      items: paginatedCourses,
      total: MOCK_COURSES.length,
      pageSize,
      currentPage: page,
    });
  }
}
