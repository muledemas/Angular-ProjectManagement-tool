import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { ProjectModule } from '../project/project.module';





@NgModule({
  declarations: [
    LoginUserComponent,
    RegisterUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ProjectModule
  ],
  exports:[
    LoginUserComponent,
    RegisterUserComponent


  ]
})
export class LoginModule { }
