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
var crud_manager_1 = require("./../services/crud.manager");
var UserHomeComponent = (function () {
    function UserHomeComponent(crud) {
        this.crud = crud;
    }
    UserHomeComponent.prototype.ngOnInit = function () {
        // this.crud.getAllData().subscribe(
        //     res => console.log(res)
        // );
    };
    return UserHomeComponent;
}());
UserHomeComponent = __decorate([
    core_1.Component({
        template: '<h1>User Home Page</h1>',
    }),
    __metadata("design:paramtypes", [crud_manager_1.CrudManager])
], UserHomeComponent);
exports.UserHomeComponent = UserHomeComponent;
//# sourceMappingURL=user.home.js.map