import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GeneraSalva01Component } from './genera-salva01/genera-salva01.component';
import { GeneraSalva02Component } from './genera-salva02/genera-salva02.component';


@NgModule({
  declarations: [
    AppComponent,
    GeneraSalva01Component,
    GeneraSalva02Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
