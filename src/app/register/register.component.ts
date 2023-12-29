import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OtpDialogComponent } from '../popups/otp-dialog/otp-dialog.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(public dialog: MatDialog,private router: Router) {}

  profileForm = new FormGroup({
    email : new FormControl('', [Validators.required,  Validators.pattern(/^[\w]{1,}[\w.+-]{0,}@[\w-]{1,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/)
  ]),
    password: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),

    })
    hide = true;
  edit=false;

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  onSubmit(){
    const dialogRef = this.dialog.open(OtpDialogComponent, {
      data:{
        email:this.profileForm.value.email
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      

    });

console.log("test",this.profileForm.value);

  }


}
