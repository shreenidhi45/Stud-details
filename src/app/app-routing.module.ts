import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AddStudentComponent } from './Components/add-student/add-student.component';
import { AddEducationComponent } from './Components/add-education/add-education.component';
import { AddAddressComponent } from './Components/add-address/add-address.component';
import { ViewComponent } from './Components/view/view.component';

const routes: Routes = [{ path: 'login', component: LoginComponent },
{ path: 'dashboard', component: DashboardComponent },
{ path: '', redirectTo: '/login', pathMatch: 'full' },
{path:'add-student', component:AddStudentComponent},
{path:'add-address', component:AddAddressComponent},
{path:'add-education', component:AddEducationComponent},
{ path: 'view/:index', component: ViewComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
