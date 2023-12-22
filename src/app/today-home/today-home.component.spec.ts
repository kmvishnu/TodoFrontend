import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayHomeComponent } from './today-home.component';

describe('TodayHomeComponent', () => {
  let component: TodayHomeComponent;
  let fixture: ComponentFixture<TodayHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodayHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
