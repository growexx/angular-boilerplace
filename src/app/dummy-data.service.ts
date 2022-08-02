import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DummyDataService {
  url?: string;

  constructor(public http: HttpClient) { }

  public apiUrl: string = environment.apiUrl1;
  public url1: string = 'todos/';
  public url2: string = 'users/';

  getAllTodos(){
    const url = this.apiUrl + this.url1 ;
    return this.http.get(url)
  }

  getAllUsers(){
    const url = this.apiUrl + this.url2 ;
    return this.http.get(url)
  }

}
