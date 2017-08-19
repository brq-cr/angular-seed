import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  COMPONENTS,
  ViewAComponent,
} from './components';

import { SharedModule } from './../shared/shared.module';

export const routes: Routes = [
  {
    path: '',
    component: ViewAComponent,
  },
];
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ...COMPONENTS,
  ],
})
export class ViewAModule {
}