import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { ButtonComponent } from '../shared/components/button/button.component';
import { PasswordStrengthBarComponent } from '../shared/components/password-strength-bar/password-strength-bar.component';
import { AuthComponent } from './auth/auth.component';
import { AuthsidebarComponent } from '../shared/layout/authsidebar/authsidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResetpasswordComponent,
    AuthsidebarComponent,
    PasswordStrengthBarComponent,
    AuthComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatMenuModule,
    MatSelectModule,
    NgbModule,
    SharedModule,
    SweetAlert2Module,
  ],
  exports:[]
})
export class AuthModule { }
