import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../student.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

    students: any = [];
    constructor (private studentService: StudentService) {}
    //life cycle events
    //6 -7 life cycle
    ngOnInit(): void {
      console.log('came to student component');
      this.studentService.getstudent().subscribe((data) => {
        this.students = data;
      });
  
   
  

  

}

}