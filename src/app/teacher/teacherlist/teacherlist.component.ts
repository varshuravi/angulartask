import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../teacher.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-teacherlist',
  templateUrl: './teacherlist.component.html',
  styleUrls: ['./teacherlist.component.css']
})
export class TeacherlistComponent implements OnInit {

  teachers: any = [];
   constructor(private TeacherService:TeacherService) { }
  //life cycle events
  //6-7 life cycle

  ngOnInit(): void {
    console.log('came to teacher component');
    this.TeacherService.getteacher().subscribe((data) => {
      this.teachers = data;
    });

  
  
  
  }

}
