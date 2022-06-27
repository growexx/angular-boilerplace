import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient) { }
  users: any = [];
  token:any = '';
  
  login(user:any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}login`, user);
  }
  register(user:any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}register`, user);
  }
  getAllUsers(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}users`);
  }
  getUser(userId:any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}user/${userId}`);
  }
}
