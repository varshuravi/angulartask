import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {StudentService } from 'src/app/student.service';
@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.css']
})
export class CreatestudentComponent implements OnInit {
  student:any={
    fname:'',
    lname:'',
    mobile:'',
    email:'',
    password:'',
    standard:'',
    address:'',
    Gender:'',
    dob:'',
    city:'',
    state:'',
    country:'',
    language:'',
    bloodgroup:''
  };
  students:any =[];
  constructor(private studentService: StudentService) {}
  //life cycle events
  //6 -7 life cycle





  saveStudentWithObservable() {
    const student = { ...this.student };
    this.studentService.savestudent(student)
      .subscribe((response) => {
        console.log(response);
        this.students.push(response);
        this.student = {
          fname: '',
          lname: '',
          mobile:'',
          email:'',
          password:'',
          standard:'',
          address:'',
          Gender:'',
          dob:'',
          city:'',
          state:'',
          country:'',
          language:'',
          bloodgroup:''
              };
      });
  }

 

  ngOnInit(): void {

  }

}
