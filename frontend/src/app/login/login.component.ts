import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  public apiUrl = environment.LOGIN_BASEURL;

  constructor(private http: HttpClient, private router: Router) {}

  // login() {
  //   const url = `${this.apiUrl}/login`;
  //   this.http.post(url, { email: this.email, password: this.password })
  //     .subscribe({
  //       next: (response: any) => {
  //         localStorage.setItem('token', response.token);
  //         localStorage.setItem('email', this.email);
  //         console.log('Navigating to dashboard...');
  //         this.router.navigate(['/dashboard']);
  //         console.log(this.email);
          
  //       },
  //       error: (error: any) => {
  //         console.error('Login failed', error);
  //         alert('Login failed: Invalid username or password');
  //       }
  //     });
  // }

  login() {
    const url = `${this.apiUrl}/login`;
    this.http.post(url, { email: this.email, password: this.password })
      .subscribe({
        next: (response: any) => {
          if (response.token) {
            localStorage.setItem('token', response.token);
            localStorage.setItem('email', this.email);
            console.log('Token set successfully, navigating to dashboard...');
            this.router.navigate(['/dashboard']);
          } else {
            console.error('No token received, login failed.');
            alert('Login failed: No token received');
          }
        },
        error: (error: any) => {
          console.error('Login failed', error);
          alert('Login failed: Invalid username or password');
        }
      });
  }
  
  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
