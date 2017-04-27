import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home';
import { LoginComponent } from './components/login';
import { RegistrationComponent } from './components/registration';
import { UserHomeComponent } from './components/user.home';
import { AdminHomeComponent } from './components/admin.home';
import { EmployeeHomeComponent } from './components/employee.home';

import { UserGuard } from './auth/user';
import { AdminGuard } from './auth/admin';
import { EmployeeGuard } from './auth/employee';
import { NoSessionGuard } from './auth/nosession';

export const AppRoutes: Routes = [
    {   path: '', redirectTo: '/home', pathMatch: 'full'    },
    {   path: 'home', component: HomeComponent    },
    {   path: 'login', component: LoginComponent, canActivate: [ NoSessionGuard ]    },
    {   path: 'registration', component: RegistrationComponent, canActivate: [ NoSessionGuard ]    },
    {   path: 'user', component: UserHomeComponent, canActivate: [ UserGuard ]},
    {   path: 'admin', component: AdminHomeComponent, canActivate: [ AdminGuard ]},
    {   path: 'employee', component: EmployeeHomeComponent, canActivate: [ EmployeeGuard ]}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
