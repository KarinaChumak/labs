import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {IDonor} from "./donor";
import { Subscription }       from 'rxjs/Subscription';
import {DonorService} from "./donor.service";


@Component({

    templateUrl:'app/donors/donor-detail.component.html'

})
export class DonorDetailComponent implements OnInit {

    donor:IDonor = {};

    errorMessage: string;
    private sub: Subscription;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _donorService: DonorService) {
    }

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = params['id'];
                this.getDonor(id);
            });
    }


    getDonor(id: string) {
        this._donorService.getDonor(id).subscribe(
            donor => this.donor = donor,
            error => this.errorMessage = <any>error);
    }


    // ngOnDestroy() {
    //     this.sub.unsubscribe();
    // }
}