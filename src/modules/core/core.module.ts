import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';

import {
  SERVICES, 
} from './services';

import {
  ACTIONS,
} from './actions';

import {
  EFFECTS, 
} from './effects';

import { reducer } from './reducers';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [
    StoreModule.forRoot(reducer),
    StoreRouterConnectingModule,
    // EffectsModule.run(),
  ],
  exports: [
    StoreModule,
  ]
})
export class CoreModule {}