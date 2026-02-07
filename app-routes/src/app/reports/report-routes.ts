import { Routes } from '@angular/router';
import { ReportBalanceScoreCard } from './views/report-balance-score-card/report-balance-score-card';
import { ReportByHours } from './views/report-by-hours/report-by-hours';
import { ReportSummary } from './views/report-summary/report-summary';
import { Report } from './views/report/report';

export const reportRoutes: Routes = [
  {
    path: '',
    component: Report,
    children: [
      {
        path: '',
        component: ReportSummary,
      },
      {
        path: 'hours',
        component: ReportByHours,
        data: { title: 'Report By Hours', roles: ['admin', 'user'] },
      },
      {
        path: 'balance-score-card',
        component: ReportBalanceScoreCard,
      },
    ],
  },
];
