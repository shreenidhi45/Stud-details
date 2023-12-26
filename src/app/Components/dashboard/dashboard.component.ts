import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {

  selectedDetails:any;
  constructor(private dataservice:DataService,private router: Router) {}

  loadComponent(component: string): void {
    if (component === 'add-student') {
      this.router.navigate(['/add-student']);
    }
    
  }
  ngOnInit() {
    this.selectedDetails = this.dataservice.getSelectedDetails();
    console.log(this.selectedDetails)
  }
  viewDetails(index:number){
    const currentStudent=this.selectedDetails[index]
    this.router.navigate(['/view', index]);
  }
}
