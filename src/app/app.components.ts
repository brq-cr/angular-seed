import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { NotificationComponent } from './components/UI/shared/notification'
import { LoadingComponent } from './components/UI/shared/loading'
import { HomeUserListComponent } from './components/UI/home/user-list';

export const COMPONENTS = [
  HomeUserListComponent,
  NotificationComponent,
  LoadingComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ComponentsModule { }