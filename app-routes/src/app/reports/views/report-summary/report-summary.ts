import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-report-summary',
  imports: [],
  templateUrl: './report-summary.html',
  styleUrl: './report-summary.scss',
})
export class ReportSummary {
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  goToReportByHours() {
    //this.router.navigateByUrl('/reports/hours');
    this.router.navigate(['hours'], { relativeTo: this.activatedRoute });
  }
}
