import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  userlogin= (data : any)=>{
  return this.http.post("http://localhost:8080/userlogin",data);
  }
  userReg= (data:any)=>{
    return this.http.post("http://localhost:8080/userReg", data)
  }
}
