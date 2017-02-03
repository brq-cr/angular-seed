import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { NotificationService } from './../../services/notification';
import { LoadingService } from './../../services/loading';

@Component({
  selector: 'app-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ngb-notification [message]="appNotification$ | async"></ngb-notification>
    <ngb-loading-indicator [show]="showLoading$ | async"></ngb-loading-indicator>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  appNotification$: Observable<any>;
  showLoading$: Observable<any>;

  constructor(private NotificationService: NotificationService, private LoadingService: LoadingService) {
    this.appNotification$ = this.NotificationService.getMessage();
    this.showLoading$ = this.LoadingService.getIndicatorStatus();
  }
}