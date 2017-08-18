import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  COMPONENTS,
} from './components';

/**
 * SharedModule
 * Only for shared components, directives and pipes
 * Do not specify providers here
 * https://angular.io/docs/ts/latest/cookbook/ngmodule-faq.html#!#what-kinds-of-modules-should-i-have-and-how-should-i-use-them-
 */

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  exports: [
    ...COMPONENTS,
  ]
})
export class SharedModule {}