import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Option } from 'src/app/core/interface/option.model';
import { ThemesService } from 'src/app/core/services/themes.service';

@Component({
  selector: 'app-theme-button',
  templateUrl: './theme-button.component.html',
  styleUrls: ['./theme-button.component.scss']
})
export class ThemeButtonComponent implements OnInit {

  @Input() options!: Array<Option>
  @Output() themeChange: EventEmitter<Option> = new EventEmitter<Option>();
  @Input() theme!: Option;

  constructor(private themeService: ThemesService) { }

  ngOnInit(): void {
  }
  changeTheme(themeToSet: Option) {
    this.themeChange.emit(themeToSet)
  }

}
