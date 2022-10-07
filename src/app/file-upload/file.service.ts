import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FileService {

  fileData: any;
  public fileid!: string;

  private apiUrl: string = 'https://v2.convertapi.com/d/';

  public fileConfig = [{
    label: 'Name',
    class: 'user-name',
  }, {
    label: 'size',
    class: 'user-role',
  }, ];

 @Input() tableFileName:any;


  constructor(private http: HttpClient) { }

  private files = new BehaviorSubject<any>(this.fileid);
  public files$ = this.files.asObservable();

  //View files
  viewFiles(id: number): Observable<any> {
    const url = this.apiUrl + id;
    return this.http.get(url)
  }
  
}
