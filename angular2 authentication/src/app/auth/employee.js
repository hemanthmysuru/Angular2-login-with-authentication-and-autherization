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
var router_1 = require("@angular/router");
var session_manager_1 = require("../services/session.manager");
var EmployeeGuard = (function () {
    function EmployeeGuard(router, session) {
        this.router = router;
        this.session = session;
    }
    EmployeeGuard.prototype.canActivate = function () {
        if (this.session.sessionChecker()) {
            if (this.session.getSessionHolder().userActive) {
                this.router.navigate(['user']);
            }
            else if (this.session.getSessionHolder().adminActive) {
                this.router.navigate(['admin']);
            }
            return true;
        }
        this.router.navigate(['login']);
        return false;
    };
    EmployeeGuard.prototype.canActivateChild = function () {
        console.log('checking child route access');
        return true;
    };
    return EmployeeGuard;
}());
EmployeeGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        session_manager_1.SessionManager])
], EmployeeGuard);
exports.EmployeeGuard = EmployeeGuard;
//# sourceMappingURL=employee.js.map