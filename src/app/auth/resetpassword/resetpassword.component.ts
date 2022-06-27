import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  @ViewChild('resetPasswordSwal')
  public readonly resetPasswordSwal!: SwalComponent;
  
  resetPasswordForm = new FormGroup({
    email: new FormControl('pruthvi.dhamecha@gmail.com', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
  });

  submitButton: any = {
    "text": "Submit",
    "id": "resetpassword",
    "type": "submit",
    "btnClasses": "btn btn-lg btn-primary me-4"
  }
  cancelButton: any = {
    "text": "Cancel",
    "id": "cancel",
    "type": "button",
    "btnClasses": "btn btn-lg btn-light-primary fw-bolder",
    "URL": "/"
  }

  constructor(private router:Router) { }

  ngOnInit(): void { }

  onResetPassword() {
    this.submitButton = { 
      text: "Please Wait...", 
      type: "submit", 
      btnClasses: "btn btn-lg btn-primary me-4",
      iconClasses: 'fa fa-spinner fa-spin',
      iconPlace: 'after' 
    };
    this.resetPasswordSwal.fire();
    this.submitButton = {
      "text": "Submit",
      "id": "resetpassword",
      "type": "submit",
      "btnClasses": "btn btn-lg btn-primary me-4"
    };
  }
}
