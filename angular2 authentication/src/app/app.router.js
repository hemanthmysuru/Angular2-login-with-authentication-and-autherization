"use strict";
var router_1 = require("@angular/router");
var home_1 = require("./components/home");
var login_1 = require("./components/login");
var registration_1 = require("./components/registration");
var user_home_1 = require("./components/user.home");
var admin_home_1 = require("./components/admin.home");
var employee_home_1 = require("./components/employee.home");
var user_1 = require("./auth/user");
var admin_1 = require("./auth/admin");
var employee_1 = require("./auth/employee");
var nosession_1 = require("./auth/nosession");
exports.AppRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_1.HomeComponent },
    { path: 'login', component: login_1.LoginComponent, canActivate: [nosession_1.NoSessionGuard] },
    { path: 'registration', component: registration_1.RegistrationComponent, canActivate: [nosession_1.NoSessionGuard] },
    { path: 'user', component: user_home_1.UserHomeComponent, canActivate: [user_1.UserGuard] },
    { path: 'admin', component: admin_home_1.AdminHomeComponent, canActivate: [admin_1.AdminGuard] },
    { path: 'employee', component: employee_home_1.EmployeeHomeComponent, canActivate: [employee_1.EmployeeGuard] }
];
exports.routing = router_1.RouterModule.forRoot(exports.AppRoutes);
//# sourceMappingURL=app.router.js.map