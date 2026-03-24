import { Component } from '@angular/core';
import { LoginUserComponent } from './login/login-user/login-user.component';
import { ShowallprojectComponent } from './project/showallproject/showallproject.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyProject';


  isDisable: number = 0;
  disablebutton(num: number) {
    this.isDisable = num;
    this.adlog = num;


  }

  Registration: number = 0;

  adlog = 0;







}
