import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report-by-hours',
  imports: [],
  templateUrl: './report-by-hours.html',
  styleUrl: './report-by-hours.scss',
})
export class ReportByHours {
  activatedRoute = inject(ActivatedRoute);

  getTitle() {
    const { title } = this.activatedRoute.snapshot.data;
    alert(`Title: ${title}`);
  }
}
