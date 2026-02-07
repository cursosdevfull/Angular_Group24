import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-report-list',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './report-list.html',
  styleUrl: './report-list.scss',
})
export class ReportList {}
