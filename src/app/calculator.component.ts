import {Component} from '@angular/core';
@Component({
    selector: 'simple-interest',
    templateUrl: './templates/calculator.component.html',
    styleUrls: ['./css/calculator.component.css']
})

export class CalculatorComponent {
    expression = "0";
    totalExpression = "0";
    result = "0";
    dot = false;
    addNumber(value:string) {
        if (this.expression === "0") {
            this.expression = "";
        }
        if(this.result!=="0" && this.expression.indexOf("*")==-1 && this.expression.indexOf("/")==-1 && this.expression.indexOf("+")==-1 && this.expression.indexOf("-")==-1)
        {
            return;                    // Check Total expression You cant modify Answer
        }
        if(value=="."){
           if(!this.dot)
           {
               this.expression += value;
               this.dot=true;                                       // Dot Condition
           }
           return;
        }
        if(value==="0"&&this.expression.slice(-1)==="/")
        {
            return;
        }
        this.expression += value;
    }

    addToken(value:string) {
        if (this.expression === "0"&&value==="-") {
            this.expression = value;
            return;
        }
        if (this.expression === "0") {
            return;
        }
        if(this.expression.slice(-1)==="." || this.expression.slice(-1)==="*" || this.expression.slice(-1)==="/" || this.expression.slice(-1)==="+" || this.expression.slice(-1)==="-")
        {
            return;           // we are finding last position element
        }
        this.calculate();
        this.expression += value;
        this.dot = false;
    }

    clear() {
        let op = false;
        let neg = false;
        if(this.expression.length===1||this.expression.length===0)
        {
            this.expression = "0";
            return;
        }
        if(this.result!=="0" && this.expression.indexOf("*")==-1 && this.expression.indexOf("/")==-1)
        {
            op = true;
        }

        if (op && this.expression.indexOf("-") === -1) {
            neg=true;
        }
        else if (op && this.expression.lastIndexOf("-") === 0)   // Handle negative clear
        {
            neg =true;
        }

        if (op && neg && this.expression.indexOf("+") === -1) {
            return;
        }
        else if (op && neg && this.expression.charAt(this.expression.indexOf("+")-1) === "e")   // Handle negative clear
        {
            return;
        }


        let lindex= this.expression.length -1;
        this.expression = this.expression.slice(0,lindex);

    }

    allClear() {
        this.expression = "0";
        this.totalExpression = "0";
        this.result="0";
    }

    calculate() {
        let sindex:number,a:string,b:string,op:string="";
       sindex = this.expression.indexOf("*");
        if(sindex===this.expression.length-1)
        {
            return;
        }
        if(sindex!==-1){
            op="*";
            a=this.expression.slice(0,sindex);
            b=this.expression.slice(sindex+1,this.expression.length);
        }
        sindex = this.expression.lastIndexOf("+");
        if(sindex===this.expression.length-1)
        {
            return;
        }
        if(sindex!==-1&& this.expression.charAt(sindex-1)!=="e"){
            op="+";
            a=this.expression.slice(0,sindex);
            b=this.expression.slice(sindex+1,this.expression.length);
        }
        sindex = this.expression.lastIndexOf("-");
        if(sindex===this.expression.length-1 && sindex===0)
        {
            return;
        }
        if(sindex!==-1 && sindex!==0){
            op="-";
            a=this.expression.slice(0,sindex);
            b=this.expression.slice(sindex+1,this.expression.length);
        }
        sindex = this.expression.indexOf("/");
        if(sindex===this.expression.length-1)
        {
            return;
        }
        if(sindex!==-1){
            op="/";
            a=this.expression.slice(0,sindex);
            b=this.expression.slice(sindex+1,this.expression.length);
        }
        if(op==="") {
            return;
        }
        let num1=parseFloat(a);
        let num2=parseFloat(b);
        switch(op) {
            case "+":this.expression = (num1+num2).toString();
                     if(this.totalExpression === "0")
                     {
                         this.totalExpression =a+' '+op+ ' '+b;
                     }
                     else {
                         this.totalExpression +=' '+op+ ' '+b;
                     }
                     break;
            case "-":this.expression = (num1-num2).toString();       // Setting the Total expression
                if(this.totalExpression === "0")
                {
                    this.totalExpression =a+' '+op+ ' '+b;
                }
                else {
                    this.totalExpression+=' '+op+ ' '+b;
                }
                break;
            case "/":this.expression = (num1/num2).toString();
                if(this.totalExpression === "0")
                {
                    this.totalExpression =a+' '+op+ ' '+b;
                }
                else {
                    this.totalExpression +=' '+op+ ' '+b;
                }
                break;
            case "*":this.expression = (num1*num2).toString();
                if(this.totalExpression === "0")
                {
                    this.totalExpression =a+' '+op+ ' '+b;
                }
                else {
                    this.totalExpression +=' '+op+ ' '+b;
                }
                break;

        }
        this.expression = (Math.round(parseFloat(this.expression)*1000000)/1000000).toString();

        this.result=this.expression;

    }

}
