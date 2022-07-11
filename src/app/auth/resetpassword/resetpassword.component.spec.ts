import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { SwalComponent, SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AuthsidebarComponent } from 'src/app/includes/authsidebar/authsidebar.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import Swal from 'sweetalert2';
import { ResetpasswordComponent } from './resetpassword.component';

describe('ResetpasswordComponent', () => {
  let component: ResetpasswordComponent;
  let fixture: ComponentFixture<ResetpasswordComponent>;
  let submitButton:any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,ReactiveFormsModule, FormsModule, SweetAlert2Module.forRoot()],
      declarations: [ ResetpasswordComponent, AuthsidebarComponent, ButtonComponent],
      providers:[Swal]
    })
    .compileComponents();
  });

  beforeEach(() => {
    submitButton = { 
      text: "Please Wait...", 
      type: "submit", 
      btnClasses: "btn btn-lg btn-primary me-4",
      iconClasses: 'fa fa-spinner fa-spin',
      iconPlace: 'after' 
    };
    fixture = TestBed.createComponent(ResetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should called onResetPassword() and return success', (() => {
    component.resetPasswordForm.controls['email'].setValue('eve.holt@reqres.in');
    component.onResetPassword();
    fixture.detectChanges();
    submitButton = {
      "text": "Submit",
      "id": "resetpassword",
      "type": "submit",
      "btnClasses": "btn btn-lg btn-primary me-4"
    }
    expect(component.submitButton).withContext("button content should be changed").toEqual(submitButton);
  }));
});
