import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersData: any;
  roles: Array<string> = [];
  gender: Array<string> = [];
  usersConfig = [{
    label: 'Name',
  }, {
    label: 'Role',
  }, {
    label: 'Contact Number',
  }, {
    label: 'Department',
  }, {
    label: 'Birthdate',
  }, {
    label: 'Actions',
  }];
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}users`);
  }
  getUser(userId:any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}users/${userId}`);
  }
  deleteUser(userId:any): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}users/${userId}`);
  }
  filterUser(key:any, value:any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}users/filter?key=${key}&value=${value}`);
  }
  searchUser(value:any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}users/search?q=${value}`);
  }
}
