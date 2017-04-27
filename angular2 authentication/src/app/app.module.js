"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var app_router_1 = require("./app.router");
// components
var home_1 = require("./components/home");
var login_1 = require("./components/login");
var user_home_1 = require("./components/user.home");
var admin_home_1 = require("./components/admin.home");
var employee_home_1 = require("./components/employee.home");
var registration_1 = require("./components/registration");
// Services
var user_1 = require("./auth/user");
var admin_1 = require("./auth/admin");
var employee_1 = require("./auth/employee");
var nosession_1 = require("./auth/nosession");
var crud_manager_1 = require("./services/crud.manager");
var session_manager_1 = require("./services/session.manager");
var login_manager_1 = require("./services/login.manager");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            app_router_1.routing,
            forms_1.ReactiveFormsModule,
            forms_1.FormsModule
        ],
        declarations: [
            app_component_1.AppComponent,
            home_1.HomeComponent,
            login_1.LoginComponent,
            registration_1.RegistrationComponent,
            user_home_1.UserHomeComponent,
            admin_home_1.AdminHomeComponent,
            employee_home_1.EmployeeHomeComponent
        ],
        providers: [
            user_1.UserGuard,
            admin_1.AdminGuard,
            employee_1.EmployeeGuard,
            nosession_1.NoSessionGuard,
            crud_manager_1.CrudManager,
            session_manager_1.SessionManager,
            login_manager_1.LoginManager
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map