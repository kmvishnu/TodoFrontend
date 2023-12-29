import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-otp-dialog',
  templateUrl: './otp-dialog.component.html',
  styleUrls: ['./otp-dialog.component.css']
})
export class OtpDialogComponent {

  status: 'false'|'loading' | 'success' | 'failed' | 'otpSuccess' | 'otpFailed' | 'otpFalse'= 'loading';
  message:string=''

  otpForm = new FormGroup({
    otp: new FormControl('', [Validators.required]),
    })
  constructor(
  
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<OtpDialogComponent>,
    private http: HttpClient
   
  ) {}

  ngOnInit() {
    // Make the HTTP POST request when the dialog is opened
    this.http.post<any>(environment.api + 'todo/sendOtp', {"email":this.data.email}).subscribe(
      response => {
        // Handle the response status
        this.status= response.status
        this.message=response.message
      },
      error => {
        console.log("this.",error);
        this.status= error.error.status
        this.message=error.error.message
      }
    );
  }


  onSubmit(){
    this.http.post<any>(environment.api + 'todo/verifyOtp', {
      "name":this.data.name,
      "email":this.data.email,
      "password":this.data.password,
      "otp":this.otpForm.value.otp
  }).subscribe(
      response => {
        // Handle the response status
        this.status= response.status
        this.message=response.message
      },
      error => {
        console.log("this.",error.error.message);

        // if(error.status === 'otpFailed') {
        //   this.status = 'otpFailed';
        // }else {
        //   this.status = 'otpFalse';
        // }
        this.status= error.error.status
        this.message=error.error.message

      }
    );
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
