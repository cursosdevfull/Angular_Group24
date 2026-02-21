import { Component } from '@angular/core';
import { Title } from '../title/title';

@Component({
  selector: 'app-page-secondary',
  imports: [Title],
  templateUrl: './page-secondary.html',
  styleUrl: './page-secondary.scss',
})
export class PageSecondary {
  titleValue = 'Título de la página secundaria';

  showAlert() {
    alert('¡Acción realizada en la página secundaria!');
  }
}
