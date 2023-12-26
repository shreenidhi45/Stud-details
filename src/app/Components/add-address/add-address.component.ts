import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent {
  formData: any = {
    addressType: '',
    address1: '',
    address2: '',
    country: '',
    state: '',
    pincode: '',
  };

  countries: string[] = ['Country 1', 'Country 2', 'Country 3'];
  states: string[] = ['State 1', 'State 2', 'State 3'];

  constructor(private router: Router, private dataService: DataService) {}

  onNext() {
    // Save data to the service
    this.dataService.setAddressFormData(this.formData);

    // Navigate to the next step
    this.router.navigate(['/add-education']);
  }
}
