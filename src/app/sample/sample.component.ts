import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
})
export class SampleComponent implements OnInit {

  users:any =[
   {
    name:'varsha',
    age:'23',
    bloodgroup:'a1+ve',

  },
  {
    name:'megaa',
    age:'15',
    bloodgroup:'b+ve',

  },
];

  constructor() { }

  ngOnInit(): void {
  }

}
