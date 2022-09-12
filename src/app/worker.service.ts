import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WorkerService {
  constructor(private http:HttpClient) { }

  getWorkerWithPromise(){
    return new Promise((resolve,reject)=>{
      this.http.get("https://6308908a722029d9ddd23bed.mockapi.io/worker").subscribe(
        (responce)=>{
        resolve(responce);
      },
      (err)=>{
        reject(err);
      }
      );
    });
  }
  
  saveWorkerWithPromise(worker:any){
    return new Promise((resolve,reject)=>{
      this.http.post("https://6308908a722029d9ddd23bed.mockapi.io/worker", worker).subscribe(
        (responce)=>{
        resolve(responce);
      },
      (err)=>{
  reject(err);
      }
      );
    });
  }
  
  getWorker(id:any){
    return new Promise((resolve,reject)=>{
      this.http.get("https://6308908a722029d9ddd23bed.mockapi.io/worker"+"/"+id).subscribe(
        (responce)=>{
        resolve(responce);
      },
      (err)=>{
        reject(err);
      }
      );
    });
    }
  
    updateWorker(id:any, workerdata:any){
      return new Promise((resolve,reject)=>{
        this.http.put("https://6308908a722029d9ddd23bed.mockapi.io/worker"+"/"+id,workerdata).subscribe(
          (responce)=>{
          resolve(responce);
        },
        (err)=>{
          reject(err);
        }
        );
      });
    }
  
    removeWorker(id:any){
      return new Promise((resolve,reject)=>{
        this.http.delete("https://6308908a722029d9ddd23bed.mockapi.io/worker"+"/"+id).subscribe(
          (responce)=>{
          resolve(responce);
        },
        (err)=>{
          reject(err);
        }
        );
      });
    }
  }