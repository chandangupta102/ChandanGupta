import { Component } from '@angular/core';
@Component({
    selector: 'simple-interest',
    templateUrl: './templates/simpleInterest.component.html',
    styleUrls: ['./css/simpleInterest.component.css']
})

export class SimpleInterestComponent {
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
       switch(value)
       {
           case 'Monthly':intRate = this.interest * 12;
                            break;
           case 'Quarterly':intRate = this.interest * 4;
               break;
           case 'Halfyearly':intRate = this.interest * 2;
               break;
           default:intRate = this.interest;
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
       this.si=(this.amt*totalTime*intRate)/100;
       this.si = Math.round (this.si*100) / 100;
       this.cint = this.si + this.amt;
}
}