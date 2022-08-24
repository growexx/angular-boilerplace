import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Option } from '../interface/option.model';
import { StyleManagerService } from './style-manager.service';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {


  constructor(private http: HttpClient, private styleManager: StyleManagerService) { }

  getThemeOptions(): Observable<Array<Option>> {
    return this.http.get<Array<Option>>('assets/styles/options/options.json');
  }

  setTheme(themeToSet: any) {
    this.styleManager.setStyle(`node_modules/@angular/material/prebuilt-themes/${themeToSet}.css`);
  }
}
