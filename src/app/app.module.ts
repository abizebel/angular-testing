import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  //<<<< import it here

import { AppComponent } from './app.component';

import { ListComponent } from "./list/list.component";
import { BoxComponent } from "./box/box.component";
import { CounterComponent } from "./counter/counter.component";

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    BoxComponent,
    CounterComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
