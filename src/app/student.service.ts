import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private http:HttpClient) { }

  getstudent(){
    return this.http.get('https://6308908a722029d9ddd23bed.mockapi.io/student');
  }

  savestudent(student:any){
    return this.http.post('https://6308908a722029d9ddd23bed.mockapi.io/student',student)
  }
  loadstudentbycode(id:any){

    return this.http.get('https://6308908a722029d9ddd23bed.mockapi.io/student'+'/'+id)

  }
  removedelete(id:any){

    return this.http.delete('https://6308908a722029d9ddd23bed.mockapi.io/student'+'/'+id)

  }
  updatestudent(id:any,studentdata:any){
    return this.http.put('https://6308908a722029d9ddd23bed.mockapi.io/student'+'/'+id,studentdata)
 

  }
}