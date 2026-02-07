import { JsonPipe } from '@angular/common';
import { Component, effect, inject, Signal, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, ParamMap, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  imports: [RouterModule, JsonPipe],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.scss',
})
export class UserDetail {
  userId = signal<string | null>(null);
  category = signal<string | null>(null);
  fragment = signal<string | null>(null);
  //mySubscription: Subscription;
  //route = inject(ActivatedRoute);
  //router = inject(Router);
  routeParams: Signal<ParamMap | undefined>;
  routeQueryParams: Signal<ParamMap | undefined>;
  routeFragment: Signal<string | null | undefined>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.userId.set(this.route.snapshot.paramMap.get('id'));
    this.routeParams = toSignal(this.route.paramMap);
    this.routeQueryParams = toSignal(this.route.queryParamMap);
    this.routeFragment = toSignal(this.route.fragment);

    effect(() => {
      console.log('Route params changed:', this.routeParams());
      const parameters = this.routeParams();
      if (parameters) {
        this.userId.set(parameters.get('id'));
      }
    });

    effect(() => {
      console.log('Query params changed:', this.routeQueryParams());
      const parameters = this.routeQueryParams();
      if (parameters) {
        this.category.set(parameters.get('category'));
      }
    });

    effect(() => {
      console.log('Fragment changed:', this.routeFragment());
      const fragment = this.routeFragment();
      if (fragment) {
        this.fragment.set(fragment);
      }
    });

    /*this.mySubscription = this.route.paramMap.subscribe((params) => {
      this.userId.set(params.get('id'));
    });*/
  }

  ngOnDestroy() {
    //this.mySubscription.unsubscribe();
  }

  changeUser() {
    const categories = ['sports', 'music', 'movies', 'technology'];
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];

    const newUserId = Math.floor(Math.random() * 100).toString();

    this.router.navigate(['/user', newUserId], {
      queryParams: { category: randomCategory },
      fragment: 'section-' + randomCategory,
    });
  }
}
