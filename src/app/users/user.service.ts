import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl:string = environment.apiUrl1;
  private url:string= 'users/';

  constructor(private http: HttpClient) { }

  //Add User 
  createUser(payload:any){
    const url = this.apiUrl + this.url+'add';
    return this.http.post(url,payload)
  }

  //View Single User Details
  viewUser(id:number){
    const url = this.apiUrl+this.url+ id;
    return this.http.get(url)
  }
}
