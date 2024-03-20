import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient) { }
  users: any = [];
  token:any = '';
  
  login(user:any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}auth/login`, user);
  }
  register(user:any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}users/add`, user);
  }
}
