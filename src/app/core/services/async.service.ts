import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { country } from '../interface/modal';

@Injectable({
  providedIn: 'root'
})
export class AsyncService {
  COUNTRIES: country[] = ['CA', 'USA']
  FILEDATA!: string;
  NOASIDE:boolean = true;
  NOHEADER:boolean = true;

  constructor() { }

  private country = new BehaviorSubject<country[]>(this.COUNTRIES);
  public country$ = this.country.asObservable();

  private files = new BehaviorSubject<any>(this.FILEDATA);
  public files$ = this.files.asObservable();

  private noaside = new BehaviorSubject<any>(this.NOASIDE)
  public noaside$ = this.noaside.asObservable();

  private noheader = new BehaviorSubject<any>(this.NOHEADER)
  public noheader$ = this.noheader.asObservable();

}
