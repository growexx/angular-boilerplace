import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent implements OnInit {
  
  public firstFormGroup:FormGroup | any;
  public secondFormGroup:FormGroup | any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getDetails()
  }

  getDetails(){
    this.firstFormGroup = this.formBuilder.group({
      userName: ['', Validators.required],
      companyName: ['', Validators.required],
      userPhone:['', Validators.required],
      userCompanyAddress: ['', Validators.required]

    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

}
