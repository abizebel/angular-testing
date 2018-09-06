import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  //<<<< import it here

import { AppComponent } from './app.component';

import { ListComponent } from "./list/list.component";
import { BoxComponent } from "./box/box.component";
import { CounterComponent } from "./counter/counter.component";
import {HightlightDirective} from "./highlight/hightlight.directive";
import {IsOpenDirective} from "./open/open.directive";


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    BoxComponent,
    CounterComponent,
    HightlightDirective,
    IsOpenDirective,

  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
