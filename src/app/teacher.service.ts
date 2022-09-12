import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  constructor(private http:HttpClient) { } 
  loadteacher(){
    return new Promise((resolve,reject)=>{
      this.http.get('https://6308908a722029d9ddd23bed.mockapi.io/teacher').subscribe(
        (response) => {
          resolve(response);
        },
        (err) => {
          reject(err);
        }
        )
      
    }) 
  }
  saveteacherservice(data:any){

    return new Promise((resolve,reject)=>{
      this.http.post('https://6308908a722029d9ddd23bed.mockapi.io/teacher',data).subscribe(
    (response)=>{
      resolve(response);
    
    },
    (err)=>{
reject(err)
    }
      )
    }) 

  }
  updateteacherservice(id:any,data:any){

    return new Promise((resolve,reject)=>{
      this.http.put('https://6308908a722029d9ddd23bed.mockapi.io/teacher'+'/'+id,data).subscribe(
    (response)=>{
      resolve(response);
    
    },
    (err)=>{
reject(err)
    }
      )
    }) 

  }
  loadteacherbycode(id:any){
    return  new Promise((resolve,reject)=>{
      this.http.get('https://6308908a722029d9ddd23bed.mockapi.io/teacher'+'/'+id).subscribe(
        (response)=>{
          resolve(response);
        },
        (err)=>{
          err(reject)
        }
      )
    }) 

  }
  removeteacher(id:any){

    return new Promise ((resolve,reject)=>{
      this.http.delete('https://6308908a722029d9ddd23bed.mockapi.io/teacher'+'/'+id).subscribe(
        (response)=>{
          resolve(response)
        },
        (err)=>{
          reject(err)
        }
      )
    })

  }
}
