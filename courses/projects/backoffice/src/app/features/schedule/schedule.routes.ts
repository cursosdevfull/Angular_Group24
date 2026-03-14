export const routes = [
  {
    path: '',
    loadComponent: () =>
      import('./presentation/schedule-list/schedule-list').then((m) => m.ScheduleList),
  },
];
