import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
export interface Comment{

  body:string;
  postId:number;
  userId:number;

}
const httpOptions =   {
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class DummyDataService {
  url?: string;

  constructor(public http: HttpClient) { }

  public apiUrl: string = environment.apiUrl1;
  public url1: string = 'todos/';
  public url2: string = 'users/';
  public url3: string = 'comments/';
  public url4: string = 'add/';
  public url5: string = ':id/'

  getAllTodos(){
    const url = this.apiUrl + this.url1 ;
    return this.http.get(url)
  }

  getAllUsers(){
    const url = this.apiUrl + this.url2 ;
    return this.http.get(url)
  }

  getAllComments(){
    const url = this.apiUrl + this.url3;
    return this.http.get(url);
  }

  addComment(comment:any){
const url = `${this.apiUrl}${this.url3}add`
    return this.http.post(url,comment);
  }

  deleteComment(comment:any){
    const url =`${this.apiUrl}${this.url3}${comment.id}`
    return this.http.delete(url,comment)
  }

  editComment(comment:any){
    const url =`${this.apiUrl}${this.url3}${comment.id}`
    return this.http.put(url,comment.body)
  }

}
