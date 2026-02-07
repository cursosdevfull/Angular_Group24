import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBalanceScoreCard } from './report-balance-score-card';

describe('ReportBalanceScoreCard', () => {
  let component: ReportBalanceScoreCard;
  let fixture: ComponentFixture<ReportBalanceScoreCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportBalanceScoreCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportBalanceScoreCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
