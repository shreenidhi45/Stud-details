import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
formData:any={
  firstName:'',
  lastName: '',
  middleName:''
}
constructor(private dataservice:DataService, private router:Router){}
onNext(){
  this.dataservice.setStudentFormData(this.formData)
  this.router.navigate(['/add-address'])
}
}
