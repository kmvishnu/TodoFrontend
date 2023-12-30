import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  // Method to store JWT token in session storage
  setToken(token: string): void {
    sessionStorage.setItem('token', token);

  }

  // Method to retrieve JWT token from session storage
  getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  // Method to remove JWT token from session storage
  removeToken(): void {
    sessionStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    // Get the token from session storage
    const token = this.getToken();

    // Check if the token is present and not expired
    if (token) {
      // Decode the token to get its expiration date
      const decodedToken = this.decodeToken(token);
      
      // Check if the token is not expired
      if (decodedToken && decodedToken.exp * 1000 > Date.now()) {
        return true;
      }
    }

    // If the token is not present or expired, return false
    return false;
  }

  private decodeToken(token: string): any {
    try {
      // Decode the token using the atob function
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload;
    } catch (error) {
      // If decoding fails, return null
      return null;
    }
  }

  logout(): void {
    // Clear the token from session storage
    sessionStorage.removeItem('token');

    // Redirect to the login page or any other desired page
    this.router.navigate(['/login']);
  }

   // Method to store JWT token in session storage
   setName(name: string): void {
    sessionStorage.setItem('name', name);
    
  }

  // Method to retrieve JWT token from session storage
  getName(): string | null {
    return sessionStorage.getItem('name');
  }

}
