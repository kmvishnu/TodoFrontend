import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-otp-dialog',
  templateUrl: './otp-dialog.component.html',
  styleUrls: ['./otp-dialog.component.css']
})
export class OtpDialogComponent {

  otpForm = new FormGroup({
    otp: new FormControl('', [Validators.required]),
    })
  constructor(
  
    @Inject(MAT_DIALOG_DATA) public data: any
   
  ) {}

  onSubmit(){
    console.log(this.otpForm.value)
  }
}
