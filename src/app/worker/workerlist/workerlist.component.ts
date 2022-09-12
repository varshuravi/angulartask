import { Component, OnInit } from '@angular/core';
import {WorkerService} from '../../worker.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-workerlist',
  templateUrl: './workerlist.component.html',
  styleUrls: ['./workerlist.component.css']
})
export class WorkerlistComponent implements OnInit {

  workers: any = [];
  constructor (private workerService: WorkerService) {}
  //life cycle events
  //6 -7 life cycle
  ngOnInit(): void {
    console.log('came to workers component');
    this.workerService.getworker().subscribe((data) => {
      this.workers = data;
    
    });






  }
}