import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-comp-filter',
  templateUrl: './comp-filter.component.html',
  styleUrls: ['./comp-filter.component.scss']
})

export class CompFilterComponent {
  @Output() stringPassed: EventEmitter<any> = new EventEmitter<any>();
  searchText:any;

  valuePassed(searchText: any) {
    this.stringPassed.emit(searchText);
  }

}
