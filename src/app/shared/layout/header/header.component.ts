import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../../core/services/common/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(public commonService:CommonService, private readonly router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    window.localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
