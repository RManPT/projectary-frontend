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
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var main_1 = require("../main");
var DashboardService = (function () {
    function DashboardService(_http) {
        this._http = _http;
        this.apiURL = main_1.API.url;
        var user_data = JSON.parse(localStorage.getItem('currentUser'));
        this.headers = new http_1.Headers();
        this.headers.append("Authorization", "Basic " + btoa(user_data.username + ":" + user_data.password));
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    DashboardService.prototype.getStudent = function (id) {
        return this._http
            .get(this.apiURL + ("/user/" + id), this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DashboardService.prototype.getStudents = function () {
        return this._http
            .get(this.apiURL + '/user', this.options)
            .map(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    DashboardService.prototype.getPendingStudents = function () {
        return this._http
            .get(this.apiURL + '/user/pending', this.options)
            .map(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    DashboardService.prototype.putActiveJSON = function (id, data) {
        var user_data = JSON.parse(localStorage.getItem('currentUser'));
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append("Authorization", "Basic " + btoa(user_data.username + ":" + user_data.password));
        return this._http.post(this.apiURL + '/user/' + id + '/approve', JSON.stringify(data), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DashboardService.prototype.putBlockJSON = function (id, data) {
        var user_data = JSON.parse(localStorage.getItem('currentUser'));
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append("Authorization", "Basic " + btoa(user_data.username + ":" + user_data.password));
        return this._http.put(this.apiURL + '/user/' + id + '/swlock', JSON.stringify(data), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DashboardService.prototype.getProjectList = function () {
        return this._http
            .get(this.apiURL + "/application", this.options)
            .map(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    DashboardService.prototype.getProject = function (id) {
        return this._http
            .get(this.apiURL + ("/application/" + id), this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DashboardService.prototype.postAcceptGroup = function (groupID, projectID) {
        var json = JSON.stringify({
            "groupid": groupID,
            "projectid": projectID
        });
        return this._http
            .post(this.apiURL + '/application/accept', json, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DashboardService.prototype.handleError = function (error) {
        console.error(error);
        return Rx_1.Observable.throw(error.json().error || "Server error");
    };
    return DashboardService;
}());
DashboardService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DashboardService);
exports.DashboardService = DashboardService;
//# sourceMappingURL=dashboard.service.js.map