import { Pagination } from '../../../core/interfaces';
import { Schedule } from '../domain/schedule';
import { SchedulePort } from '../ports/schedule.port';
import { MOCK_SCHEDULES } from './mock-schedules';

export class ScheduleAdapter implements SchedulePort {
  create(schedule: Schedule): Promise<Schedule> {
    MOCK_SCHEDULES.push(schedule);
    return Promise.resolve(schedule);
  }

  getAll(): Promise<Schedule[]> {
    return Promise.resolve(MOCK_SCHEDULES);
  }

  getById(id: number): Promise<Schedule | undefined> {
    const schedule = MOCK_SCHEDULES.find((s) => s.properties.scheduleId === id);
    return Promise.resolve(schedule);
  }

  update(schedule: Schedule): Promise<Schedule> {
    const { scheduleId } = schedule.properties;
    const index = MOCK_SCHEDULES.findIndex((s) => s.properties.scheduleId === scheduleId);
    if (index === -1) {
      return Promise.reject(new Error('Schedule not found'));
    }
    MOCK_SCHEDULES[index] = schedule;
    return Promise.resolve(schedule);
  }

  delete(id: number): Promise<void> {
    const index = MOCK_SCHEDULES.findIndex((s) => s.properties.scheduleId === id);
    if (index === -1) {
      return Promise.reject(new Error('Schedule not found'));
    }
    MOCK_SCHEDULES.splice(index, 1);
    return Promise.resolve();
  }

  getByPage(page: number, pageSize: number): Promise<Pagination<Schedule>> {
    const startIndex = page * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedSchedules = MOCK_SCHEDULES.slice(startIndex, endIndex);

    return Promise.resolve({
      items: paginatedSchedules,
      total: MOCK_SCHEDULES.length,
      pageSize,
      currentPage: page,
    });
  }
}
