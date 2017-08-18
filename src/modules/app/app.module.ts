import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components';

import { AppRouterModule } from './app.router.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
