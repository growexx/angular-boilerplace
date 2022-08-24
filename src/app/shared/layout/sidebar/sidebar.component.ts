import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Option } from 'src/app/core/interface/option.model';
import { CommonService } from 'src/app/core/services/common/common.service';
import { ThemesService } from 'src/app/core/services/themes.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnChanges {

  @Input() options!: Array<Option>;
  @Output() themeChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(public commonService: CommonService, private themeService: ThemesService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  // changeTheme(themeToSet:any){
  //   this.themeChange.emit(themeToSet)
  // }
}
