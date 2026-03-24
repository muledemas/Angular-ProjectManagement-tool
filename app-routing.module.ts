import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './login/register-user/register-user.component';
import { LoginUserComponent } from './login/login-user/login-user.component';


const routes: Routes = [
//   {
//     path:"login",
//     component:LoginUserComponent
    
//     },

// {
// path:"register",
// component:RegisterUserComponent

// }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
