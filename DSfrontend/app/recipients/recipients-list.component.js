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
var recipient_service_1 = require("./recipient.service");
var admin_service_1 = require("../admin/admin.service");
var RecipientListComponent = (function () {
    function RecipientListComponent(_recipientService, _adminService) {
        this._recipientService = _recipientService;
        this._adminService = _adminService;
        this.cityFilter = "";
        this.rhesusFilter = "";
    }
    RecipientListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._recipientService.getRecipients()
            .subscribe(function (recipients) { return _this.recipients = recipients; }, function (error) { return _this.errorMessage = error; });
    };
    RecipientListComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/recipients/recipients-list.component.html'
        }), 
        __metadata('design:paramtypes', [recipient_service_1.RecipientService, admin_service_1.AdminService])
    ], RecipientListComponent);
    return RecipientListComponent;
}());
exports.RecipientListComponent = RecipientListComponent;
//# sourceMappingURL=recipients-list.component.js.map