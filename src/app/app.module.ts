import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {MenuComponent} from "./menu.component";
import {SimpleInterestComponent} from "./simpleInterest.component";
import {PageNotFoundComponent} from "./pageNotFound.component";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {FooterComponent} from "./footer.component";
import {FixedDepositComponent} from "./fixedDeposit.component";
import {ProvidentFundComponent} from "./providentFund.component";
import {CalculatorComponent} from "./calculator.component";

const appRoutes: Routes = [
    { path: '', component: CalculatorComponent},
    { path: 'HOME.Calculator', component: CalculatorComponent},
    { path: 'SI.Calculator', component: SimpleInterestComponent },
    { path: 'FD.Calculator', component: FixedDepositComponent },
    { path: 'PPF.Calculator', component: ProvidentFundComponent },  // Path nothing but a New Path
    { path: 'PF.Calculator', component: PageNotFoundComponent },
    { path: 'Calculator', component: CalculatorComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes, { useHash: true }),
        FormsModule
    ],
    declarations: [
        AppComponent,
        MenuComponent,
        SimpleInterestComponent,
        PageNotFoundComponent,
        FooterComponent,
        FixedDepositComponent,
        ProvidentFundComponent,
        CalculatorComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
