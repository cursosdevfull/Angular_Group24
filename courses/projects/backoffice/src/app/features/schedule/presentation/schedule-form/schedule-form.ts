import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal, ViewEncapsulation } from '@angular/core';
import { form, FormField, minLength, required, SchemaPathTree } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AlertError } from '@shared/components';
import { CourseApplication } from '../../../../features/courses/application/course.application';
import { Course } from '../../../../features/courses/domain/course';

type ISchedule = {
  scheduleId: number;
  courseId: number;
  title: string;
  summary: string;
  chapters: string[];
  requirements: string[];
  goals: string[];
  teacher: string;
  pricePen: number;
  duration: string;
  frequency: string;
  dateStart: Date;
};

@Component({
  selector: 'cdev-schedule-form',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    FormField,
    AlertError,
    MatDialogModule,
    MatToolbarModule,
  ],
  templateUrl: './schedule-form.html',
  styleUrl: './schedule-form.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ScheduleForm implements OnInit {
  data = inject<ISchedule>(MAT_DIALOG_DATA);
  reference = inject<MatDialogRef<ScheduleForm>>(MatDialogRef);
  courseApplication = inject(CourseApplication);

  title = this.data ? 'Edit' : 'Add';
  courses = signal<Course[]>([]);

  model = signal<ISchedule>({
    scheduleId: this.data ? this.data.scheduleId : 0,
    courseId: this.data ? this.data.courseId : 0,
    title: this.data ? this.data.title : '',
    summary: this.data ? this.data.summary : '',
    chapters: this.data ? this.data.chapters : [],
    requirements: this.data ? this.data.requirements : [],
    goals: this.data ? this.data.goals : [],
    teacher: this.data ? this.data.teacher : '',
    pricePen: this.data ? this.data.pricePen : 0,
    duration: this.data ? this.data.duration : '',
    frequency: this.data ? this.data.frequency : '',
    dateStart: this.data ? this.data.dateStart : new Date(),
  });

  schema = (schema: SchemaPathTree<ISchedule>) => {
    required(schema.title, { message: 'El título es requerido' });
    minLength(schema.title, 5, { message: 'El título debe tener al menos 5 caracteres' });
    required(schema.teacher, { message: 'El docente es requerido' });
    required(schema.summary, { message: 'El resumen es requerido' });
    required(schema.courseId, { message: 'El curso es requerido' });
  };

  form = form(this.model, this.schema);

  async ngOnInit() {
    try {
      const result = await this.courseApplication.getAll();
      this.courses.set(result);
    } catch (error) {
      console.error('Error cargando cursos', error);
    }
  }

  save() {
    if (this.form().valid()) {
      this.reference.close(this.model());
    }
  }
}
