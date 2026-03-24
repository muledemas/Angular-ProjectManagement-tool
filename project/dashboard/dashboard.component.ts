import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { myprojectdata } from 'src/app/Model/myprojectdata.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private http:HttpClient){

    this.getdetails();
  }

  obj:myprojectdata=new myprojectdata();

  show = 0;
  isshow(num:number) {
    this.show = num;
  }

  
  getdetails()
  {
    

    this.http.get('http://localhost:8080/project/getProjectCnt').subscribe(
      (data:any)=>{
        if(data==null)
        {
          window.alert("Data not fetch");
        }
        else
        {
          
          this.obj=data;
        }



      });

    
  }

}
