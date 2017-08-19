import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { HttpModule } from '@angular/http';

import {
  SERVICES, 
} from './services';

import {
  JokeEffects
} from './effects';

import { 
  reducers 
} from './reducers';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [
    HttpModule,
    EffectsModule.forRoot([
      JokeEffects,
    ]),
    StoreModule.forRoot(reducers),
    StoreRouterConnectingModule,
  ],
  providers: [
    ...SERVICES,
  ]
})
export class CoreModule {}