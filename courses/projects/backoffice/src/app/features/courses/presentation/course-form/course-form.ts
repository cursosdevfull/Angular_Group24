import { Component, inject, signal, ViewEncapsulation } from '@angular/core';
import { form, FormField, minLength, required, SchemaPathTree } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AlertError } from '@shared/components';

type ICourse = {
  id: number;
  title: string;
};

@Component({
  selector: 'cdev-course-form',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormField,
    AlertError,
    MatDialogModule,
    MatToolbarModule,
  ],
  templateUrl: './course-form.html',
  styleUrl: './course-form.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CourseForm {
  data = inject<ICourse>(MAT_DIALOG_DATA);

  reference = inject<MatDialogRef<CourseForm>>(MatDialogRef);

  title = this.data ? 'Edit' : 'Add';

  model = signal<ICourse>({
    id: this.data ? this.data.id : 0,
    title: this.data ? this.data.title : '',
  });

  schema = (schema: SchemaPathTree<ICourse>) => {
    required(schema.title, { message: 'El título es requerido' });
    minLength(schema.title, 5, { message: 'El título debe tener al menos 5 caracteres' });
  };

  form = form(this.model, this.schema);

  save() {
    if (this.form().valid()) {
      this.reference.close(this.model());
    }
  }
}
