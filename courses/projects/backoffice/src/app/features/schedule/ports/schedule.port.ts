import { InjectionToken } from '@angular/core';
import { Pagination } from '../../../core/interfaces';
import { Schedule } from '../domain/schedule';

export type SchedulePort = {
  create(schedule: Schedule): Promise<Schedule>;
  getAll(): Promise<Schedule[]>;
  getById(id: number): Promise<Schedule | undefined>;
  update(schedule: Schedule): Promise<Schedule>;
  delete(id: number): Promise<void>;
  getByPage(page: number, pageSize: number): Promise<Pagination<Schedule>>;
};

export const SCHEDULE_PORT = new InjectionToken<SchedulePort>('SCHEDULE_PORT');
