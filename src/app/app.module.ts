import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  //<<<< import it here

import { AppComponent } from './app.component';
import { serverComponent } from './server/server.component';
import {cpuComponent} from './cpu/cpu.component'
import {ramComponent} from './ram/ram.component'


import { ListComponent } from "./list/list.component";
import { BoxComponent } from "./box/box.component";

@NgModule({
  declarations: [
    AppComponent,
    serverComponent,
    cpuComponent,
    ramComponent,
    ListComponent,
    BoxComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
