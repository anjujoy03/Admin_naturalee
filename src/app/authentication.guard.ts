import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthgurdServiceService} from './authgurd-service.service'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private Authguardservice: AuthgurdServiceService, private router: Router) {}
  canActivate(): boolean {
    if (!this.Authguardservice.gettoken()) {  
      this.router.navigateByUrl("/forms/stockform");  
  }  
  return this.Authguardservice.gettoken(); 

  }
  
}
