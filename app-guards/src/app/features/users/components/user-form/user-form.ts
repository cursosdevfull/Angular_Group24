import { Component } from '@angular/core';
import { IDeactivate } from '../../../../core/interface/deactivate.interface';

@Component({
  selector: 'app-user-form',
  imports: [],
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss',
})
export class UserForm implements IDeactivate {
  name = 'Karla';
  lastname = 'Gomez';

  nameOriginal = 'Karla';
  lastnameOriginal = 'Gomez';

  state = 'original';

  changeName(name: string) {
    this.name = name;
    this.state = 'unsaved';
  }

  changeLastname(lastname: string) {
    this.lastname = lastname;
    this.state = 'unsaved';
  }

  save() {
    this.state = 'saved';
  }

  showStatusState() {
    if (this.state === 'saved') {
      alert('User data saved successfully!');
    } else {
      if (this.name !== this.nameOriginal || this.lastname !== this.lastnameOriginal) {
        this.state = 'unsaved';
        alert('You have unsaved changes. Please save your data.');
      } else {
        alert('No changes detected. Your data is up to date.');
      }
    }
  }

  dataChanged(): boolean {
    if (
      (this.name !== this.nameOriginal || this.lastname !== this.lastnameOriginal) &&
      this.state === 'unsaved'
    ) {
      return true;
    } else {
      return false;
    }
  }
}
