import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {TeacherService } from 'src/app/teacher.service';
@Component({
  selector: 'app-createteacher',
  templateUrl: './createteacher.component.html',
  styleUrls: ['./createteacher.component.css']
})
export class CreateteacherComponent implements OnInit {
teacher: any={
  fname: '',
  lname:'',
  mobile:'',
  email:'',
  age:'',
  nativeplace:'',
  address:'',
  Gender:'',
  dob:'',
  city:'',
  state:'',
  country:'',
  language:'',
  bloodgroup:''
};

teachers: any =[];
  constructor(private techerservice:TeacherService) { }
  //   life cycle events
  // 6 -7 life cycle


 saveTeacherwithPromise(){
    const teacher = { ...this.teacher };
    this.techerservice.saveteacherservice(teacher).then((response) => {
      console.log(response);
      this.teachers.push(response);
      this.teacher = {
        fname: '',
        lname: '',
        mobile: '',
        email: '',
        age:'',
        nativeplace:'',
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
