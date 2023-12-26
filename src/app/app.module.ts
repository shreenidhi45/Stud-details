import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddStudentComponent } from './Components/add-student/add-student.component';
import { AddAddressComponent } from './Components/add-address/add-address.component';
import { AddEducationComponent } from './Components/add-education/add-education.component';
import { ViewComponent } from './Components/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AddStudentComponent,
    AddAddressComponent,
    AddEducationComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule, NgbModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
