import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
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
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  themes: CustomTheme[] = [
    {
      primary: '#673AB7',
      accent: '#FFC107',
      name: 'deeppurple-amber',
      isDark: false,
    },
    {
      primary: '#3F51B5',
      accent: '#E91E63',
      name: 'indigo-pink',
      isDark: false,
      isDefault: true,
    },
    {
      primary: '#E91E63',
      accent: '#607D8B',
      name: 'pink-grey',
      isDark: true,
    },
    {
      primary: '#9C27B0',
      accent: '#4CAF50',
      name: 'purple-green',
      isDark: true,
    },
  ];

  // options$: Observable<any> = this.themeService.getThemeOptions();
  selectedTheme!: Option;
  options: Array<Option> = options;
  currentTheme: any;

  private stylesBasePath = `node_modules/@angular/material/prebuilt-themes/`;


  constructor(public commonService: CommonService,
    private readonly router: Router, private themeService: ThemesService, private readonly styleManager: StyleManagerService) {
  }

  ngOnInit(): void {
    this.installTheme('indigo-pink');

  }

  installTheme(themeName: string) {
    const theme = this.themes.find(currentTheme => currentTheme.name === themeName);
    if (!theme) {
      return;
    }

    if (theme.isDefault) {
      this.styleManager.removeStyle('theme');
    } else {
      this.styleManager.setStyle('theme', `/assets/styles/theme/${theme.name}.css`);
    }

  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

}

export interface CustomTheme {
  name: string;
  accent: string;
  primary: string;
  isDark?: boolean;
  isDefault?: boolean;
}