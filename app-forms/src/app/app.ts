import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveForms } from './reactive-forms/reactive-forms';
import { FormsSignal } from './forms-signal/forms-signal';
import { TemplateForms } from './template-forms/template-forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveForms, FormsSignal, TemplateForms],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('app-forms');
}
