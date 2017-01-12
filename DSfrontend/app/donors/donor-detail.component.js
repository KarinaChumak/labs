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
var donor_service_1 = require("./donor.service");
var DonorDetailComponent = (function () {
    function DonorDetailComponent(_route, _router, _donorService) {
        this._route = _route;
        this._router = _router;
        this._donorService = _donorService;
        this.donor = {};
    }
    DonorDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            var id = params['id'];
            _this.getDonor(id);
        });
    };
    DonorDetailComponent.prototype.getDonor = function (id) {
        var _this = this;
        this._donorService.getDonor(id).subscribe(function (donor) { return _this.donor = donor; }, function (error) { return _this.errorMessage = error; });
    };
    DonorDetailComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/donors/donor-detail.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, donor_service_1.DonorService])
    ], DonorDetailComponent);
    return DonorDetailComponent;
}());
exports.DonorDetailComponent = DonorDetailComponent;
//# sourceMappingURL=donor-detail.component.js.map