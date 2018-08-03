import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  //<<<< import it here

import { AppComponent } from './app.component';
import { serverComponent } from './server/server.component';
import {cpuComponent} from './cpu/cpu.component'
import {ramComponent} from './ram/ram.component'

@NgModule({
  declarations: [
    AppComponent,
    serverComponent,
    cpuComponent,
    ramComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
