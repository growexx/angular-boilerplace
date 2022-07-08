import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { createUser } from '../usermodal';
@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent implements OnInit {

  public firstFormGroup: FormGroup | any;
  public secondFormGroup: FormGroup | any;
  public userModal: createUser | any;
  isLinear:boolean = false;
  userVal!:createUser;
  firstFormVal:any;
  secondFormVal:any;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.getDetails()
  }

  getDetails() {
    this.firstFormGroup = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      company: new FormGroup({
        address: new FormControl('', Validators.required)
      })

    });
    this.secondFormGroup = this.formBuilder.group({
      addressLine1: ['', Validators.required],
      addressLine2: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postalCode: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  goToStep2() {
    const firstFormVal = this.firstFormGroup.value;
    console.log(firstFormVal)
  }

  goToStep3() {
    this.secondFormVal = this.secondFormGroup.value;
    this.firstFormVal = this.firstFormGroup.value;
    console.log(this.firstFormVal?.firstName)
    console.log(this.secondFormVal)
  }

  addUser() {
    this.userVal = this.firstFormGroup.value;
    this.userService.createUser(this.userVal).subscribe({
      next: (res) => {
        console.log(res)
      }
    })
  }

}
