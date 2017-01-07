import { Component } from '@angular/core';
@Component({
    selector: 'provident-fund',
    templateUrl: './templates/publicProvidentFund.component.html',
    styleUrls: ['./css/publicProvidentFund.component.css']
})

export class PublicProvidentFundComponent {
    amt = 0;           // Actual Amount
    years = 0;         // years
    si = 0;            // Earn Interest
    interest = 0;      // Interest Rate
    intType = 'Yearly'; // Subscription type
    cint = 0;           // total Amt

    calculate(value?:any) {
        let totalAmt = 1, totalInterest = 0, totalTime = this.years,i=0;
        if(!value)
        {
            value=this.intType;
        }
        if(totalTime <= 0)
        {
            return;
        }
        switch(value)
        {
            case 'Monthly':
                for (i = 1; i <= 12; i++) {
                  totalInterest = totalInterest + (this.amt*i*this.interest)/1200;
                }
                totalAmt =12;
                break;
            case 'Quarterly':
                for (i = 3; i <= 12; i=i+3) {
                    totalInterest = totalInterest + (this.amt*i*this.interest)/1200;
                }
                totalAmt =4;
                break;
            case 'Halfyearly':
                for (i = 6; i <= 12; i=i+6) {
                    totalInterest = totalInterest + (this.amt*i*this.interest)/1200;
                }
                totalAmt =2;
                break;
            default:totalInterest = totalInterest + (this.amt*this.interest)/100;
        }
        let cinterest = totalInterest;
        if(totalTime === 1)
        {
            totalAmt = totalAmt *this.amt + totalInterest;
        }
        else {
            let intRate = 1+(this.interest/100);
            for (i = 1; i < totalTime ; i++) {
                cinterest =cinterest + (totalInterest*Math.pow(intRate,totalTime-i)) + (this.amt*Math.pow(intRate,totalTime-i))-this.amt;
            }
            totalAmt = totalAmt *this.amt*totalTime + cinterest;
        }
        this.cint = Math.round (totalAmt);
        this.si = Math.round (cinterest);
    }
}