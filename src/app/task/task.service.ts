import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  private apiUrl: string = environment.apiUrl1;
  private url: string = 'todos/';

  getAllTodos(){
    const url = this.apiUrl + this.url ;
    return this.http.get(url)
  }
}
