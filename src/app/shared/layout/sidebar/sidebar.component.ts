import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Option } from 'src/app/core/interface/option.model';
import { AsyncService } from 'src/app/core/services/async.service';
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
  @Output() noaside: EventEmitter<string> =  new EventEmitter<string>();
  @Output() noheader: EventEmitter<string> =  new EventEmitter<string>();

  sidebarData: boolean = true;
  headerData: boolean = true;

  constructor(public commonService: CommonService, private themeService: ThemesService, private asyncService: AsyncService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  noAside(noSideData:any){
    this.noaside.emit(noSideData)
  }

  noHeader(headerData: any) {
    this.noheader.emit(headerData)
  }
  


}
