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
var router_1 = require("@angular/router");
var SessionHolder = (function () {
    function SessionHolder() {
        this.userActive = false;
        this.employeeActive = false;
        this.adminActive = false;
    }
    SessionHolder.prototype.activatationManager = function (user, employee, admin) {
        this.userActive = user;
        this.employeeActive = employee;
        this.adminActive = admin;
    };
    SessionHolder.prototype.sessionOwner = function (who) {
        if (who != null && who != undefined) {
            this.activatationManager((who == 'user'), (who == 'employee'), (who == 'admin'));
            return true;
        }
        return false;
    };
    return SessionHolder;
}());
var SessionManager = (function () {
    function SessionManager(crud, router) {
        this.crud = crud;
        this.router = router;
        this.sessionExists = false;
        this.sessionHolder = new SessionHolder();
    }
    SessionManager.prototype.createSession = function (user) {
        if (!this.getSessionExists()) {
            window.localStorage.setItem('logger', JSON.stringify(user));
            this.sessionExists = true;
            this.syncSession(user);
        }
        else {
            this.sessionChecker();
        }
    };
    SessionManager.prototype.sessionChecker = function () {
        if (this.getSessionExists()) {
            return this.setSessionHolder(this.convertSessionDataStringToJson().role);
        }
        return false;
    };
    SessionManager.prototype.syncSession = function (user, callback) {
        if (this.setSessionHolder(user.role)) {
            this.sessionNavigator();
        }
    };
    SessionManager.prototype.sessionNavigator = function () {
        if (this.getSessionHolder().userActive) {
            this.router.navigate(['user']);
        }
        else if (this.getSessionHolder().employeeActive) {
            this.router.navigate(['employee']);
        }
        else if (this.getSessionHolder().adminActive) {
            this.router.navigate(['admin']);
        }
    };
    SessionManager.prototype.setSessionHolder = function (role) {
        return this.sessionHolder.sessionOwner(role);
    };
    SessionManager.prototype.getSessionHolder = function () {
        if (this.getSessionExists()) {
            return this.sessionHolder;
        }
        return null;
    };
    SessionManager.prototype.convertSessionDataStringToJson = function () {
        return JSON.parse(this.getSessionStoredData());
    };
    SessionManager.prototype.getSessionStoredData = function () {
        return window.localStorage.getItem('logger');
    };
    SessionManager.prototype.getSessionExists = function () {
        if (this.getSessionStoredData() != null) {
            return true;
        }
        return false;
    };
    SessionManager.prototype.destroySession = function () {
        window.localStorage.removeItem('logger');
        this.sessionHolder.sessionOwner('');
        this.sessionExists = false;
        this.router.navigate(['login']);
    };
    return SessionManager;
}());
SessionManager = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [crud_manager_1.CrudManager, router_1.Router])
], SessionManager);
exports.SessionManager = SessionManager;
//# sourceMappingURL=session.manager.js.map