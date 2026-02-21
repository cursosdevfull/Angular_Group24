import { Component } from '@angular/core';
import { Title } from '../title/title';

@Component({
  selector: 'app-page',
  imports: [Title],
  templateUrl: './page.html',
  styleUrl: './page.scss',
})
export class Page {
  titleValue = 'Título de la página';

  showAlert() {
    alert('¡Acción realizada!');
  }
}
