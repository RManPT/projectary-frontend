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
var core_1 = require("@angular/core");
var login_service_1 = require("../login/login.service");
var OptionPublicComponent = (function () {
    function OptionPublicComponent(login) {
        this.login = login;
    }
    OptionPublicComponent.prototype.ngOnInit = function () {
        // this.subscription = this.login.roleChange
        // .subscribe(
        //     value => this.role = value,
        //     ()=> console.log("deu erro"),
        //     ()=> console.log("completou")
        // );
    };
    OptionPublicComponent.prototype.load = function () {
        this.role = "";
        var user_data = JSON.parse(localStorage.getItem('currentUser'));
        if (user_data != null) {
            this.role = user_data.role;
        }
        // this.login.getRole();
    };
    OptionPublicComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        // this.subscription.unsubscribe();
    };
    return OptionPublicComponent;
}());
OptionPublicComponent = __decorate([
    core_1.Component({
        selector: "option-public",
        templateUrl: "app/menu/options/optionPublic.component.html"
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService])
], OptionPublicComponent);
exports.OptionPublicComponent = OptionPublicComponent;
//# sourceMappingURL=optionPublic.component.js.map