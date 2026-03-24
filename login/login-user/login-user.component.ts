import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {



  username: String = "";
  password: String = "";
  constructor(private http: HttpClient, private app: AppComponent) { }

  login() {
    console.log(this.login);
    this.http.get('http://localhost:8080/Niks/login' + this.username + 'and' + this.password).subscribe(
      (data: any) => {
        if (!data) {
          window.alert("Unauthorized User");
        }
        else {
          window.alert("Login Successfull..!");

          this.app.adlog =3;
        }

      }


    )
  }
}