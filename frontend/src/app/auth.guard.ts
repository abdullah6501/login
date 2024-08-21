import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const token = localStorage.getItem('token');
  console.log('Token:', token);
  if (token) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
 };
 
