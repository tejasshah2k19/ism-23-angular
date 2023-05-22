import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { log } from 'console';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  
  constructor(private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      let token = localStorage.getItem("token") as string 
      console.log("LoginGuard");
      if(token == null || token== undefined || token.trim().length  == 0 ){
        this.router.navigateByUrl("/login");
        return false;
      }
      
      
      return true;//goahead 
  }
  
}
