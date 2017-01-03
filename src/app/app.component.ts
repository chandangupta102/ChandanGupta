import { Component } from '@angular/core';
import {MenuComponent} from "./menu.component";

@Component({
    selector: 'my-app',
    templateUrl: './templates/app.component.html',
    styleUrls: ['./css/app.component.css'],
    entryComponents:[MenuComponent]
})

export class AppComponent {


}

