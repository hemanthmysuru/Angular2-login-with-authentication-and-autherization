import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { routing } from './app.router';

// components
import { HomeComponent } from './components/home';
import { LoginComponent } from './components/login';
import { UserHomeComponent } from './components/user.home';
import { AdminHomeComponent } from './components/admin.home';
import { EmployeeHomeComponent } from './components/employee.home';
import { RegistrationComponent } from './components/registration';

// Services
import { UserGuard } from './auth/user';
import { AdminGuard } from './auth/admin';
import { EmployeeGuard } from './auth/employee';
import { NoSessionGuard } from './auth/nosession';

import { CrudManager } from './services/crud.manager';
import { SessionManager } from './services/session.manager';
import { LoginManager } from './services/login.manager';

@NgModule({
  imports: [
      BrowserModule,
      HttpModule,
      JsonpModule,
      routing,
      ReactiveFormsModule,
      FormsModule
  ],
  declarations: [
      AppComponent,
      HomeComponent,
      LoginComponent,
      RegistrationComponent,
      UserHomeComponent,
      AdminHomeComponent,
      EmployeeHomeComponent
  ],
  providers: [
      UserGuard,
      AdminGuard,
      EmployeeGuard,
      NoSessionGuard,
      CrudManager,
      SessionManager,
      LoginManager
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
