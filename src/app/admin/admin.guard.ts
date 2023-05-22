import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let role = localStorage.getItem("role") as string 

      if(role == undefined ){
        this.router.navigateByUrl("/login")
        return false;
      }else{
          if(role != "admin"){
            this.router.navigateByUrl("/login")
            return false;    
          }
      }

      return true;
  }
  
}
