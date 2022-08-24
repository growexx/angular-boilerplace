import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Option } from 'src/app/core/interface/option.model';
import { CommonService } from 'src/app/core/services/common/common.service';
import { StyleManagerService } from 'src/app/core/services/style-manager.service';
import { ThemesService } from 'src/app/core/services/themes.service';
import * as  options from '../../../../assets/styles/options/options.json';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  options$: Observable<any> = this.themeService.getThemeOptions();
  selectedTheme!: Option;
  options: Array<Option> = options;
  private readonly stylesBasePath = `node_modules/@angular/material/prebuilt-themes/`;


  constructor(public commonService: CommonService, 
    private readonly router: Router, private themeService: ThemesService, private readonly styleManager: StyleManagerService) {
  }

  ngOnInit(): void {
    // this.themeService.setTheme('deeppurple-amber');
    this.styleManager.setStyle(`${this.stylesBasePath}deeppurple-amber.css`);

  }



  themeChangeHandler(themeToSet: any) {
    console.log(themeToSet)
    this.selectedTheme = themeToSet;
    this.styleManager.setStyle(`${this.stylesBasePath}${themeToSet.value}.css`);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
