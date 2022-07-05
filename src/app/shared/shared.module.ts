import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { PasswordStrengthBarComponent } from './password-strength-bar/password-strength-bar.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthsidebarComponent } from './authsidebar/authsidebar.component';
import { ModalComponent } from './modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonsComponent } from './components/buttons/buttons.component';



@NgModule({
  declarations: [
    ButtonComponent,
    PasswordStrengthBarComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AuthsidebarComponent,
    ModalComponent,
    ButtonsComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    MatDialogModule
  ],
  exports:[
    ButtonComponent,
    PasswordStrengthBarComponent,
    SidebarComponent,
    AuthsidebarComponent,
    HeaderComponent,
    ModalComponent,
    ButtonsComponent
  ]
})
export class SharedModule { }
