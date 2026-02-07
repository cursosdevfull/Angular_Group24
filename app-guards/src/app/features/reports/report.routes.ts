import { Routes } from '@angular/router';
import { activateChildrenGuard } from '../../core/guards/activate-children';
import { matchAdminGuard, matchOperatorGuard, matchRole } from '../../core/guards/match';
import { ReportAdmin } from './components/report-admin/report-admin';
import { ReportByHour } from './components/report-by-hour/report-by-hour';
import { ReportByRangeDate } from './components/report-by-range-date/report-by-range-date';
import { ReportByService } from './components/report-by-service/report-by-service';
import { ReportList } from './components/report-list/report-list';
import { ReportOperator } from './components/report-operator/report-operator';

export const routes: Routes = [
  {
    path: '',
    component: ReportList,
    //canActivate: [activeGuard],
    canActivateChild: [activateChildrenGuard],
    children: [
      {
        path: 'by-hour',
        component: ReportByHour,
      },
      {
        path: 'by-range-date',
        component: ReportByRangeDate,
      },
      {
        path: 'by-service',
        component: ReportByService,
      },
      {
        path: 'scorecard',
        component: ReportAdmin,
        //canMatch: [matchAdminGuard],
        canMatch: [matchRole('admin', 'super', 'manager')],
      },
      {
        path: 'scorecard',
        component: ReportOperator,
        //canMatch: [matchOperatorGuard],
        canMatch: [matchRole('operator', 'worker')],
      },
    ],
  },
];
