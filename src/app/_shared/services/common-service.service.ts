import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
interface User {
    id:number;
    firstName: string;
    lastName: string;
    maidenName: string;
    role:string;
    age: number;
    gender: string;
    email: string;
    phone: string;
}


@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
private apiUrl = 'https://dummyjson.com/users';
  
  constructor(private http:HttpClient)  { }


  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl)
  }
}
