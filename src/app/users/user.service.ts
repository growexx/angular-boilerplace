import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl:string = environment.apiUrl1;

  constructor(private http: HttpClient) { }

  createUser(payload:any){
    const url = this.apiUrl;
    return this.http.post(url,payload)
  }
}
