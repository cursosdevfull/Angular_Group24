export const routes = [
  {
    path: '',
    loadComponent: () =>
      import('./presentation/courses-list/courses-list').then((m) => m.CoursesList),
  },
];
