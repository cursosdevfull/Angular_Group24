import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportByHours } from './report-by-hours';

describe('ReportByHours', () => {
  let component: ReportByHours;
  let fixture: ComponentFixture<ReportByHours>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportByHours]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportByHours);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
