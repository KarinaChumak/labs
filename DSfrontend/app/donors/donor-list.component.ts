import { Component, OnInit }  from '@angular/core';
import {IDonor} from './donor'
import {DonorService} from "./donor.service";
import {IFilter} from "./filter";

@Component({
    selector: 'pm-donors',
    templateUrl:'app/donors/donor-list.component.html'

})
export class DonorListComponent implements  OnInit {
    donors: IDonor[];
    errorMessage: string;
    name:string="";
    resultFor:string="";
    pageNum: number = 1;
    isNextDisabled = false;


    constructor( private _donorService : DonorService){

    }

    find():void{
        this._donorService.getDonorsByName(this.name)
            .subscribe(donors => {
                    this.donors = donors;
                    this.resultFor = this.name},
                error => this.errorMessage = <any>error);
    }

    ngOnInit():void{
       this._donorService.getDonors(1)
           .subscribe(donors => this.donors = donors,
               error => this.errorMessage = <any>error);
    }

    getDonors() : void {
        this._donorService.getDonors(this.pageNum).
        subscribe(donors => this.donors = donors,
            error => this.errorMessage = <any>error);

    }

    onNextClick(): void {
        if (!this.isNextDisabled) {
            this.pageNum += 1;
            this._donorService.getDonors(this.pageNum).subscribe(donors => this.donors = donors,
                error => this.errorMessage = <any>error);

        }
        this.IsNextDisabled();
    }

    onPrevClick(): void {
        if(this.pageNum !== 1) {
            this.pageNum -= 1;
            this._donorService.getDonors(this.pageNum).subscribe(donors => this.donors = donors,
                error => this.errorMessage = <any>error);
        }
        this.IsNextDisabled();
    }


    IsNextDisabled() : void {
        this._donorService.getDonors(this.pageNum+1).
        subscribe(donors => {
            if (donors && donors.length!== 0)
                this.isNextDisabled = false;
            else
                this.isNextDisabled = true;
            },
            error => this.errorMessage = <any>error);

    }


}