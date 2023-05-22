import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { OrderComponent } from './order/order.component';
import { LoginGuard } from './login.guard';
import { AdminGuard } from './admin/admin.guard';
import { UserGuard } from './user.guard';
import { UserComponent } from './user/user.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [

  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  // { path: "home", component: HomeComponent ,canActivate:[LoginGuard,UserGuard]},
  // { path: "dashboard", component: DashboardComponent ,canActivate:[LoginGuard,AdminGuard]},
   { path: "", component: LoginComponent },
  {path:"logout",component:LogoutComponent},
  //{path:"order",component:OrderComponent,canActivate:[LoginGuard,UserGuard]},

  {path:"users",component:UserComponent,children:[
    {path:"home",component:HomeComponent},
    {path:"order",component:OrderComponent},
    {path:"delete/:name",component:DeleteComponent}



  ],canActivate:[LoginGuard,UserGuard]}



  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
