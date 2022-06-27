import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient) { }
  users: any = [];
  token:any = '';
  login(user:any) {

    return this.http.post<any>('https://reqres.in/api/login', user);
      // .subscribe({
      //   next: data => {
      //     this.token = data.token;
      //     console.log(data.token);
      //     console.log("login success");
      //   },
      //   error: error => {
      //     console.error('There was an error!', error);
      //     console.log('Invalid Credentials');
      //   }
      // });
  }
  getUsers() {
    this.http.get<any>('https://reqres.in/api/users')
      .subscribe({
        next: data => {
          this.users = data.data;
          // console.log(data);
        },
        error: error => {
          console.error('There was an error!', error);
          console.log('Invalid Credentials');
        }
      });
  }
}
