import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddprojectComponent } from './addproject/addproject.component';
import { ShowallprojectComponent } from './showallproject/showallproject.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    DashboardComponent,
    AddprojectComponent,
    ShowallprojectComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    FormsModule,
  
  ],
  exports:[
    DashboardComponent,
    AddprojectComponent,
    ShowallprojectComponent
  ]
})
export class ProjectModule { }
