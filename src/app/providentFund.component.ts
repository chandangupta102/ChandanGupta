import { Component } from '@angular/core';
@Component({
    selector: 'provident-fund',
    templateUrl: './templates/providentFund.component.html',
    styleUrls: ['./css/providentFund.component.css']
})

export class ProvidentFundComponent {
    amt = 0;           // Actual Amount
    years = 0;         // years
    si = 0;            // Earn Interest
    interest = 0;      // Interest Rate
    cint = 0;           // total Amt
    employee = 0;
    employer = 0;

    calculate() {
        let totalAmt = 1, totalInterest = 0, totalTime = this.years,i=0;
        if(totalTime < 0 || totalTime%1!==0 || this.employee <0 || this.employer <0 || this.amt <0 || this.interest <0 || this.interest >100 || this.employee >100 || this.employer >100)
        {
            return;
        }
        let amt:number;
        amt = this.amt*(this.employee+this.employer);
        amt = amt/100;
        for (i = 1; i <= 12; i++) {
            totalInterest = totalInterest + (amt*i*this.interest)/1200;
        }
        totalAmt =12;
        let cinterest = totalInterest;
        if(totalTime === 1)
        {
            totalAmt = totalAmt *amt + totalInterest;
        }
        else {
            let intRate = 1+(this.interest/100);
            for (i = 1; i < totalTime ; i++) {
                cinterest =cinterest + (totalInterest*Math.pow(intRate,totalTime-i)) + (amt*Math.pow(intRate,totalTime-i))-amt;
            }
            totalAmt = totalAmt *amt*totalTime + cinterest;
        }
        this.cint = Math.round (totalAmt);
        this.si = Math.round (cinterest);
    }
}