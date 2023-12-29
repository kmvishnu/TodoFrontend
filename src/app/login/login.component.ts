import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router, private http: HttpClient) {}

  profileForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^[\w]{1,}[\w.+-]{0,}@[\w-]{1,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/
      ),
    ]),
    password: new FormControl('', [Validators.required]),
  });
  hide = true;
  edit = false;
  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  onSubmit() {
    this.http
      .post<any>(environment.api + 'todo/login', {
        email: this.profileForm.value.email,
        password: this.profileForm.value.password,
      })
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log('this.', error.error.message);

        }
      );
  }
}
