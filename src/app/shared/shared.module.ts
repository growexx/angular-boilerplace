import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { PasswordStrengthBarComponent } from './password-strength-bar/password-strength-bar.component';



@NgModule({
  declarations: [
    ButtonComponent,
    PasswordStrengthBarComponent
  ],
  imports: [
    CommonModule    
  ],
  exports:[
    ButtonComponent,
    PasswordStrengthBarComponent
  ]
})
export class SharedModule { }
