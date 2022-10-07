import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { country } from '../interface/modal';

@Injectable({
  providedIn: 'root'
})
export class AsyncService {
  COUNTRIES: country[] = ['CA', 'USA']
  FILEDATA!: string;

  constructor() { }

  private country = new BehaviorSubject<country[]>(this.COUNTRIES);
  public country$ = this.country.asObservable();

  private files = new BehaviorSubject<any>(this.FILEDATA);
  public files$ = this.files.asObservable();

}
