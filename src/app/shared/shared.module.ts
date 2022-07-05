import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { PasswordStrengthBarComponent } from './components/password-strength-bar/password-strength-bar.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthsidebarComponent } from './layout/authsidebar/authsidebar.component';
import { ModalComponent } from './components/modal/modal.component';
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
