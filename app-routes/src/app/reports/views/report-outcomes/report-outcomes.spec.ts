import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportOutcomes } from './report-outcomes';

describe('ReportOutcomes', () => {
  let component: ReportOutcomes;
  let fixture: ComponentFixture<ReportOutcomes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportOutcomes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportOutcomes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
