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

const appRoutes: Routes = [
    { path: 'simpleInterest.component', component: SimpleInterestComponent },
    { path: 'fixedDeposit.component', component: FixedDepositComponent },  // Path nothing but a New Path
    { path: '**', component: PageNotFoundComponent }
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
        FixedDepositComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
