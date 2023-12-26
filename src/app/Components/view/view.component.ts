import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
selectedStudent: any;
constructor(private route:ActivatedRoute,private dataservice: DataService){}
ngOnInit() {
  this.route.params.subscribe(params => {
    const index = +params['index'];
    this.selectedStudent = this.dataservice.getSelectedStudentDetails(index);
    console.log('selected students:',this.selectedStudent)
  });
}
}
