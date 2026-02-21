import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSecondary } from './page-secondary';

describe('PageSecondary', () => {
  let component: PageSecondary;
  let fixture: ComponentFixture<PageSecondary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageSecondary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageSecondary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
