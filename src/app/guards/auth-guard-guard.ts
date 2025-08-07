import { Injectable } from '@angular/core';
import { CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, GuardResult, MaybeAsync } from '@angular/router';
import { Observable } from 'rxjs';
import { Auth } from '../services/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivateChild {

  constructor(private auth: Auth, private router: Router) {}

  canActivateChild(): boolean{
    if(!this.auth.estaLogueado()){
      this.router.navigate(['/login'])
      return false;
    }
    return true;
      
  }
}