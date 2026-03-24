import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddprojectComponent } from './addproject/addproject.component';
import { ShowallprojectComponent } from './showallproject/showallproject.component';

const routes: Routes = [
// {path:'dashborad',component:DashboardComponent},

// {path:'addproject',component:AddprojectComponent},
// {path:'showallproject',component:ShowallprojectComponent}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
