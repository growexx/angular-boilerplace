import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleapiService {

  result: any = {};

  constructor(private http: HttpClient) { }

  public onReset = new BehaviorSubject<boolean>(false);
  public resetValue = this.onReset.asObservable();

  getAddress() {
    const header = { headers: new HttpHeaders({ googleSearch: 'true' }) };
    return this.http.get('public/googleSearch', header);
  }

  getActualAddress() {
    const header = { headers: new HttpHeaders({ googleSearch: 'true' }) };
    return this.http.get('public/setGoogleSearch', header);
  }

  makeCustomAddressObject(array: any) {
    array?.filter((res: any) => {
      if (res['types'].length >= 1) {
        this.result[res['types'][0]] = res['short_name'];
      }
    });
    if ((this.result['country'] === 'CA') ||
      (this.result['country'] === 'Canada') ||
      (this.result['country'] === 'canada') ||
      (this.result['country'] === 'CANADA')) {
      this.result['country'] = 'Canada';
      return this.result;
    } else if ((this.result['country'] === 'US') ||
      (this.result['country'] === 'us') ||
      (this.result['country'] === 'usa') ||
      (this.result['country'] === 'USA')) {
      this.result['country'] = 'USA';
      return this.result;
    } else {
      return this.result;
    }
  }

  makeCustomAddress(array: any) {
    array?.filter((res: any) => {
      if (res['types'].length >= 1) {
        this.result[res['types'][0]] = res['short_name'];
      }
    });
    if ((this.result['country'] === 'CA') ||
      (this.result['country'] === 'Canada') ||
      (this.result['country'] === 'canada') ||
      (this.result['country'] === 'CANADA')) {
      this.result['country'] = 'Canada';
      return this.result;
    } else if ((this.result['country'] === 'US') ||
      (this.result['country'] === 'us') ||
      (this.result['country'] === 'usa') ||
      (this.result['country'] === 'USA')) {
      this.result['country'] = 'USA';
      return this.result;
    } else {
      return this.result;
    }
  }
}
