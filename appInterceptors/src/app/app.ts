import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { Load } from './load/load';
import { Loading } from './loading';

@Component({
  selector: 'app-root',
  imports: [Load],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('appInterceptors');

  loading = inject(Loading);

  http = inject(HttpClient);

  getMovies() {
    this.http
      .get(
        //'https://rottentomato.p.rapidapi.com/streaming-movies?genre=action&sortby=critic_highest&after=Mjk%3D' /* ,
        '/users' /* ,
        {
          headers: {
            'x-rapidapi-host': '',
            'x-rapidapi-key': '',
          },
        }, */,
      )
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => console.error(error),
      });
  }
}
