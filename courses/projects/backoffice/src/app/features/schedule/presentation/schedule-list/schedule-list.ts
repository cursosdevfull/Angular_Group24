import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Paginator, Table, Title } from '@shared/components';
import { Modal, Notification } from '@shared/services';
import { TitleInfo } from '@shared/types';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
import { ScheduleApplication } from '../../application/schedule.application';
import { Schedule } from '../../domain/schedule';
import { metaColumnsSchedule } from '../../utils/columns/schedule';
import { ScheduleForm } from '../schedule-form/schedule-form';

@Component({
  selector: 'cdev-schedule-list',
  imports: [Title, Table, Paginator, MatButtonModule, MatTableModule, MatIconModule],
  templateUrl: './schedule-list.html',
  styleUrl: './schedule-list.scss',
})
export class ScheduleList {
  private readonly application = inject(ScheduleApplication);
  private readonly notification = inject(Notification);
  private readonly modal = inject(Modal);

  public titleInfo: TitleInfo = {
    title: 'Schedules',
    icon: 'calendar_month',
  };

  public schedules = this.application.schedules;
  public length = this.application.length;
  public pageSize = this.application.pageSize;
  private currentPage = 0;
  public metaColumns = metaColumnsSchedule;

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
    const reference = this.modal.open(ScheduleForm, 'schedule-form', data);
    reference.subscribe({
      next: async (result) => {
        if (result.scheduleId && result.scheduleId > 0) {
          const schedule = new Schedule(
            {
              title: result.title,
              courseId: result.courseId,
              summary: result.summary,
              chapters: result.chapters,
              requirements: result.requirements,
              goals: result.goals,
              teacher: result.teacher,
              pricePen: result.pricePen,
              duration: result.duration,
              frequency: result.frequency,
              dateStart: result.dateStart,
            },
            result.scheduleId,
          );
          await this.application.update(schedule);
        } else {
          const schedule = new Schedule({
            title: result.title,
            courseId: result.courseId,
            summary: result.summary,
            chapters: result.chapters,
            requirements: result.requirements,
            goals: result.goals,
            teacher: result.teacher,
            pricePen: result.pricePen,
            duration: result.duration,
            frequency: result.frequency,
            dateStart: result.dateStart,
          });
          await this.application.create(schedule);
        }
      },
      error: console.log,
    });
  }
}
