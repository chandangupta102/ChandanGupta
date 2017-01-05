import { Component } from '@angular/core';
@Component({
    selector: 'fixed-deposit',
    templateUrl: './templates/fixedDeposit.component.html',
    styleUrls: ['./css/fixedDeposit.component.css']
})

export class FixedDepositComponent {
    amt = 0;
    years = 0;
    days = 0;
    si = 0;
    interest = 0;
    months = 0;
    intType = 'Yearly';
    cint = 0;

    calculate(value?:any) {
        let intRate = 0, totalTime=0;
        if(!value)
        {
            value=this.intType;
        }
        if(this.years>0)
        {
            totalTime=this.years;
        }
        if(this.months>0)
        {
            totalTime=totalTime + (this.months/12);
        }
        if(this.days>0)
        {
            totalTime=totalTime + (this.days/365);
        }
        switch(value)
        {
            case 'Monthly':intRate = this.interest/12;
                totalTime = totalTime * 12;
                break;
            case 'Quarterly':intRate = this.interest/4;
                totalTime = totalTime * 4;
                break;
            case 'Halfyearly':intRate = this.interest/2;
                totalTime = totalTime * 2;
                break;
            default:intRate = this.interest;
        }
        intRate = 1+(intRate/100);
        this.si=(this.amt*Math.pow(intRate,totalTime));
        this.cint = Math.round (this.si*100) / 100;
        this.si = this.si - this.amt;
        this.si = Math.round (this.si*100) / 100;
    }
}