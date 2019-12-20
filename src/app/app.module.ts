import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpleDirective } from './simple.directive';
import { StdirectiveDirective } from './stdirective.directive';

@NgModule({
  declarations: [
    AppComponent,
    SimpleDirective,
    StdirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
