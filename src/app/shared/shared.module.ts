import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { PasswordStrengthBarComponent } from './password-strength-bar/password-strength-bar.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthsidebarComponent } from './authsidebar/authsidebar.component';



@NgModule({
  declarations: [
    ButtonComponent,
    PasswordStrengthBarComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AuthsidebarComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports:[
    ButtonComponent,
    PasswordStrengthBarComponent,
    SidebarComponent,
    AuthsidebarComponent
  ]
})
export class SharedModule { }
