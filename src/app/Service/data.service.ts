import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // private formData: any = {};
  // private educationData: any = {};
  // private totalSum: number = 0;

  // setStudentFormData(data: any) {
  //   this.formData = { ...this.formData, ...data };
  // }

  // setAddressFormData(data: any) {
  //   this.formData = { ...this.formData, ...data };
  // }

  // setEducationFormData(data: any) {
  //   this.educationData = data;
  // }

  // setTotalSum(totalSum: number) {
  //   this.totalSum = totalSum;
  // }

  // getSelectedDetails() {
  //   const studentDetails=[
  //    {
  //     firstName: this.formData.firstName,
  //     middleName: this.formData.middleName,
  //     lastName: this.formData.lastName,
  //     address: {
  //       addressType: this.formData.addressType,
  //       address1: this.formData.address1,
  //       address2: this.formData.address2,
  //       country: this.formData.country,
  //       state: this.formData.state,
  //       pincode: this.formData.pincode,
  //     },
  //     totalSum: this.totalSum,
  //   }
  // ];
  // return studentDetails;
  // }
  private selectedStudentIndex!: number ;
  private students: any[] = [];
  

  setStudentFormData(data: any) {
    const student = { ...data, address: {}, educationData: {}, totalSum: 0 };
    this.students.push(student);
  }

  setAddressFormData(data: any) {
    const currentStudent = this.students[this.students.length - 1];
    if (currentStudent) {
      currentStudent.address = { ...data };
    }
  }

  setEducationFormData(data: any) {
    const currentStudent = this.students[this.students.length - 1];
    if (currentStudent) {
      currentStudent.educationData = { ...data };
    }
  }

  setTotalSum(totalSum: number) {
    const currentStudent = this.students[this.students.length - 1];
    if (currentStudent) {
      currentStudent.totalSum = totalSum;
    }
  }

  getSelectedDetails() {
    return this.students;
  }
  getSelectedStudentDetails(index: number) {
    const selectedStudent = this.students[index];
    // Return a copy of the selected student data to avoid reference issues
    return { ...selectedStudent };
  }
  
}
