import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/common/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(public commonService:CommonService) { }

  ngOnInit(): void {
  }

}
