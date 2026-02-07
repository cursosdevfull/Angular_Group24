import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserActivitiesSocialMedia } from './user-activities-social-media';

describe('UserActivitiesSocialMedia', () => {
  let component: UserActivitiesSocialMedia;
  let fixture: ComponentFixture<UserActivitiesSocialMedia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserActivitiesSocialMedia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserActivitiesSocialMedia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
