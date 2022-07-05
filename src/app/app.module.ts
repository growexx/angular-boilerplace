import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './auth/login/login.component';
import { AuthsidebarComponent } from './includes/authsidebar/authsidebar.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './auth/register/register.component';
import { PasswordStrengthBarComponent } from './shared/components/password-strength-bar/password-strength-bar.component';
import { ResetpasswordComponent } from './auth/resetpassword/resetpassword.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './includes/sidebar/sidebar.component';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { ToolbarComponent } from './includes/toolbar/toolbar.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthsidebarComponent,
    ButtonComponent,
    RegisterComponent,
    PasswordStrengthBarComponent,
    ResetpasswordComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    ToolbarComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
