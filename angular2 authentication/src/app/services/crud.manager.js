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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var CrudManager = (function () {
    function CrudManager(http) {
        this.http = http;
    }
    CrudManager.prototype.getRequestOptions = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    CrudManager.prototype.getAllData = function (url) {
        return this.http.get(url, this.getRequestOptions)
            .map(function (res) { return res.json(); });
    };
    CrudManager.prototype.getDataById = function (id) {
        return this.http.get('--URL--/id', this.getRequestOptions)
            .map(function (res) { return res.json(); });
    };
    CrudManager.prototype.postData = function () {
        var body = null;
        return this.http.post('--URL--', body, this.getRequestOptions)
            .map(function (res) { return res.json(); });
    };
    CrudManager.prototype.deleteData = function () {
        return this.http.delete('--URL--/id', this.getRequestOptions)
            .map(function (res) { return res.json(); });
    };
    CrudManager.prototype.updateData = function () {
        var body = null;
        return this.http.put('--URL--/id', body, this.getRequestOptions)
            .map(function (res) { return res.json(); });
    };
    return CrudManager;
}());
CrudManager = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CrudManager);
exports.CrudManager = CrudManager;
//# sourceMappingURL=crud.manager.js.map