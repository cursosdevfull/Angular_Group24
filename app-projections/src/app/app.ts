import { Component, signal } from '@angular/core';
import { Title } from './title/title';
import { Page } from './page/page';
import { PageSecondary } from './page-secondary/page-secondary';

@Component({
  selector: 'app-root',
  imports: [Page, PageSecondary],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('app-projections');
}
