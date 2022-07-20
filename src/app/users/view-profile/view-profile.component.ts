import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import * as _ from 'lodash';
import { UserService } from '../user.service';
import { userDetailsType, userTaskType } from '../usermodal';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {

  id!: number;
  userDetails!: userDetailsType;
  userTask!: userTaskType;

  constructor(private userService: UserService, private route: ActivatedRoute) {

    this.route.params.subscribe((params: Params) => {
      console.log(params)
      if (params['id']) {
        this.id = params['id']
        console.log(this.id)
      }
    })
  }

  ngOnInit(): void {
    this.getUserDetailsById(this.id);
    this.getUserTaskById(this.id)
  }

  getUserDetailsById(id: number) {
    this.userService.viewUser(id).subscribe((res: any) => {
      console.log(res)
      this.userDetails = _.cloneDeep(res);
    })
  }

  getUserTaskById(id:number){
    this.userService.getUserTask(id).subscribe((res:any)=>{
      console.log(res);
      this.userTask = _.cloneDeep(res)
    })
  }
}
