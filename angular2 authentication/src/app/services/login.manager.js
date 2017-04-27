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
var crud_manager_1 = require("./crud.manager");
var session_manager_1 = require("./session.manager");
var LoginManager = (function () {
    function LoginManager(crud, session) {
        this.crud = crud;
        this.session = session;
    }
    LoginManager.prototype.login = function (model) {
        var _this = this;
        var url = 'app/misc/user.json';
        this.crud.getAllData(url).subscribe(function (res) { return _this.session.createSession(res); }, function (err) { return console.log(err); });
    };
    LoginManager.prototype.isLoggedIn = function () {
        return (localStorage.getItem('logger') !== null);
    };
    LoginManager.prototype.logout = function () {
        this.session.destroySession();
    };
    return LoginManager;
}());
LoginManager = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [crud_manager_1.CrudManager,
        session_manager_1.SessionManager])
], LoginManager);
exports.LoginManager = LoginManager;
//# sourceMappingURL=login.manager.js.map