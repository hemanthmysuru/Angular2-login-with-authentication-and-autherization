"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var login_manager_1 = require("../services/login.manager");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var LoginComponent = (function () {
    function LoginComponent(formBuilder, loginManager, http) {
        this.formBuilder = formBuilder;
        this.loginManager = loginManager;
        this.http = http;
        this.events = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new forms_1.FormGroup({
            email: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(5)]),
            password: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(5)])
        });
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        var options = new http_1.RequestOptions({ headers: headers });
        console.log('called');
        this.http.get('http://localhost:8080/test', options)
            .map(function (res) { return res.json(); })
            .subscribe(function (res) { return console.log(res); }, function (err) { return console.log('err'); });
    };
    LoginComponent.prototype.loginAttempt = function (model, isValid) {
        if (isValid) {
            this.loginManager.login(model);
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        templateUrl: './../templates/login.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        login_manager_1.LoginManager,
        http_1.Http])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.js.map