import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components';

import { AppRouterModule } from './app.router.module';
import { CoreModule } from './../core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRouterModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
