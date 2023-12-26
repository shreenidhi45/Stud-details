import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent {
  formData: any = {
    englishValue: 0,
    hindiValue: 0,
    psValue: 0,
    gValue: 0,
    mValue: 0,
  };

  totalSum: number = 0;

  constructor(private dataservice: DataService, private router: Router) {}

  calculateSum() {
    this.totalSum = 0;

    this.totalSum += this.formData.englishValue || 0;
    this.totalSum += this.formData.hindiValue || 0;
    this.totalSum += this.formData.psValue || 0;
    this.totalSum += this.formData.gValue || 0;
    this.totalSum += this.formData.mValue || 0;

    // Save data to the service
    

    // Optionally, you can store the total sum in the service as well
    //this.dataservice.setTotalSum(this.totalSum);
  }

  onDone() {
    this.dataservice.setEducationFormData(this.formData);
    this.dataservice.setTotalSum(this.totalSum);
    this.router.navigate(['/dashboard'])
  }
}
