import { inject, Injectable, signal } from '@angular/core';
import { firstValueFrom, of } from 'rxjs';
import { Pagination } from '../../../core/interfaces';
import { Notification } from '../../../shared/services';
import { Schedule } from '../domain/schedule';
import { SCHEDULE_PORT, SchedulePort } from '../ports/schedule.port';

@Injectable({
  providedIn: 'root',
})
export class ScheduleApplication {
  private readonly notification = inject(Notification);
  private readonly port: SchedulePort = inject(SCHEDULE_PORT);

  private $schedules = signal<Schedule[]>([]);
  public schedules = this.$schedules.asReadonly();

  private $length = signal<number>(0);
  public length = this.$length.asReadonly();

  private $pageSize = signal<number>(30);
  public pageSize = this.$pageSize.asReadonly();

  private $currentPage = signal<number>(0);

  async getByPage(page: number, pageSize: number) {
    const response: Array<Pagination<Schedule>> = await firstValueFrom(
      of([await this.port.getByPage(page, pageSize)]),
    );
    this.$currentPage.set(page);
    this.$schedules.set(response[0].items);
    this.$length.set(response[0].total);
    this.$pageSize.set(response[0].pageSize);
    return;
  }

  async getById(id: number) {
    const schedule = await this.port.getById(id);
    if (!schedule) {
      this.notification.show('Schedule not found.');
    }
    return schedule;
  }

  async create(schedule: Schedule) {
    const createdSchedule = await this.port.create(schedule);
    await this.getByPage(this.$currentPage(), this.$pageSize());
    this.notification.show('Schedule created successfully.');
    return createdSchedule;
  }

  async update(schedule: Schedule) {
    const updatedSchedule = await this.port.update(schedule);
    await this.getByPage(this.$currentPage(), this.$pageSize());
    this.notification.show('Schedule updated successfully.');
    return updatedSchedule;
  }

  async delete(id: number) {
    await this.port.delete(id);
    await this.getByPage(this.$currentPage(), this.$pageSize());
    this.notification.show('Schedule deleted successfully.');
  }
}
