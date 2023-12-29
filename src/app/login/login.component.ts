import { Component } from '@angular/core';
import { FormControl, Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) {}

  profileForm = new FormGroup({
  email : new FormControl('', [Validators.required,  Validators.pattern(/^[\w]{1,}[\w.+-]{0,}@[\w-]{1,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/)
]),
  password: new FormControl('', [Validators.required]),
  })
  hide = true;
edit=false;
  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  onSubmit(){
 
    
  }
}
