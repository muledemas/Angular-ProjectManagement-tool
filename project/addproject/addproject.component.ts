import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { projectdetails } from 'src/app/Model/projdetails.service';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent {

  constructor(private http: HttpClient) { }

  Statusvalue = 'Registered';

  details: projectdetails = new projectdetails();

  adproject() {
    if(this.details.projectName!=null && this.details.department!=null && this.details.locations!=null)
    {
    this.details.status = this.Statusvalue;
    this.http.post('http://localhost:8080/project/setProjectDetails', this.details).subscribe(
      (data: any) => {

        console.log(this.Statusvalue)
        window.alert("Data Added Successfully...!");

      });
    }
    else{
      window.alert("Please Enter all details..!");
      
      
    }
    this.details=new projectdetails();

  }

  show=0
  isshow(num:number)
  {
    this.show=num;

  }
  


}
