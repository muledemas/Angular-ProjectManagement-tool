import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { regUser } from 'src/app/Model/reg-service.service';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {

  constructor(private http: HttpClient) {

  }

  registerUser: regUser = new regUser();

  register() {
    console.log(this.registerUser)
    if(this.registerUser.username!=null && this.registerUser.password!=null && this.registerUser.firstname!=null && this.registerUser.lastname!=null){
    this.http.post('http://localhost:8080/Niks/register', this.registerUser).subscribe(
      (data: any) => {

        if (data == true) {
          console.log(data);

          window.alert("Registration Succeessfull");

        }
        else {

          window.alert("Registration Not completed..!");
        }

        this.registerUser = new regUser();

      }


    );
    }
    else{

      window.alert("Please enter all the fields..!")
    }

  }


}
