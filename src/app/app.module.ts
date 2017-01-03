import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {MenuComponent} from "./menu.component";
import {SimpleInterestComponent} from "./simpleInterest.component";
import {PageNotFoundComponent} from "./pageNotFound.component";
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
    { path: 'simpleInterest.component', component: SimpleInterestComponent }, // Path nothing but a New Path
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        AppComponent,
        MenuComponent,
        SimpleInterestComponent,
        PageNotFoundComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
