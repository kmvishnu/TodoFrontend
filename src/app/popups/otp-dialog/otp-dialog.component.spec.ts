import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpDialogComponent } from './otp-dialog.component';

describe('OtpDialogComponent', () => {
  let component: OtpDialogComponent;
  let fixture: ComponentFixture<OtpDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtpDialogComponent]
    });
    fixture = TestBed.createComponent(OtpDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
