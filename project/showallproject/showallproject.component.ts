import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { projectdetails } from 'src/app/Model/projdetails.service';

@Component({
  selector: 'app-showallproject',
  templateUrl: './showallproject.component.html',
  styleUrls: ['./showallproject.component.css']
})
export class ShowallprojectComponent {

  myProject: projectdetails[] = [];

  constructor(private http: HttpClient) {

    this.http.get('http://localhost:8080/project/getAllProjects').subscribe(
      (data: any) => {

        if (data == null)
          window.alert("Data not found");
        else {
          console.log(data)
          this.myProject = data;
        }



      }


    );


  }

  checkStatus(projectId: number) {
    this.http.get('http://localhost:8080/project/updateStatus' + projectId + 'and' + 'Running').subscribe(

      (data: any) => {
        if (!data)
          window.alert("Data not Update");
        else {
          for (let i = 0; i < this.myProject.length; i++) {
            if (this.myProject[i].id == projectId) {
              this.myProject[i].status = 'Running';
              break;
            }

          }

        }

      }


    );

  }

  checkStatusclo(projectId: number) {
    this.http.get('http://localhost:8080/project/updateStatus' + projectId + 'and' + 'Closed').subscribe(

      (data: any) => {
        if (!data)
          window.alert("Data not Update");
        else {
          for (let i = 0; i < this.myProject.length; i++) {
            if (this.myProject[i].id == projectId) {
              this.myProject[i].status = 'Closed';
              break;
            }

          }

        }

      }


    );

  }


  checkStatuscan(projectId: number) {
    this.http.get('http://localhost:8080/project/updateStatus' + projectId + 'and' + 'Cancelled').subscribe(

      (data: any) => {
        if (!data)
          window.alert("Data not Update");
        else {
          for (let i = 0; i < this.myProject.length; i++) {
            if (this.myProject[i].id == projectId) {
              this.myProject[i].status = 'Cancelled';
              break;
            }

          }

        }

      }


    );

  }
  show=0
  isshow(num:number)
  {
    this.show=num;

  }




}
