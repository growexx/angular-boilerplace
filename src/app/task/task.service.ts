import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  private apiUrl: string = environment.apiUrl1; 
  private url: string = 'todos/';

  getAllTodos(){
    const url = this.apiUrl + this.url ;
    return this.http.get(url);
  }

  addTodos(payload:any){
    const url = this.apiUrl + this.url + 'add';
    return this.http.post(url,payload);
  }

  deleteTodos(id:number){
    const url = this.apiUrl + this.url + id;
    return this.http.delete(url)
  }
  updateTodo(id:number,payload:any){
    const url = this.apiUrl + this.url + id;
    return this.http.put(url, payload)
  }
  getToDoById(id:number){
    const url = this.apiUrl + this.url + id;
    return this.http.get(url)
  }
}
