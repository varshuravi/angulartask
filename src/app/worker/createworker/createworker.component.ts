import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WorkerService } from 'src/app/worker.service';

@Component({
  selector: 'app-createworker',
  templateUrl: './createworker.component.html',
  styleUrls: ['./createworker.component.css']
})
export class CreateWorkerComponent implements OnInit {
  worker:any={
    fname:'',
    email:'',
    phonenumber:'',
    age:'',
    job:'',
    maritalstatus:'',
    levelofeducation:'',
    homecontactnumber:'',
    experience:'',
    address:'',
    gender:'',
    language:'',
  

  };



  workers:any =[];
  constructor(private WorkerService: WorkerService) {}
  // life cycle events
  // 6 -7 life cycle

  saveworkertWithPromise() {
    const worker = { ...this.worker };
    this.WorkerService.saveWorkerWithPromise(worker).then((response) => {
      console.log(response);
      this.workers.push(response);
      this.worker = {
            fname:'',
            email:'',
            phonenumber:'',
            age:'',
            job:'',
            maritalstatus:'',
            levelofeducation:'',
            homecontactnumber:'',
            experience:'',
            address:'',
            gender:'',
            language:''
                 
          
          
          };
          
        });
      }
      async getWorker(id:any): Promise<void>{
        this.worker = await this.WorkerService.getWorkerWithPromise();
      };

            
 ngOnInit(): void {

 }
}

    

