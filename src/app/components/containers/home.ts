import { 
  Component, 
  ChangeDetectionStrategy,
  OnInit,
} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { UserService } from './../../services/user';
import { NotificationService } from './../../services/notification';

import 'rxjs/add/operator/map';

@Component({
  selector: 'ngb-home-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1>Hi {{name}} !</h1>
    <p>You're logged in with Angular 2!!</p>
    <h3>All registered users:</h3>
    <ngb-home-user-list [users]="users$ | async"></ngb-home-user-list>
    <p><a [routerLink]="['/login']">Logout</a></p>
  `,
})
export class HomePageComponent implements OnInit {
  users$: Observable<any>;
  me$: Observable<any>;
  name: String = '';

  constructor(
    private UserService: UserService, 
    private NotificationService: NotificationService) {}

  ngOnInit () {
    this.users$ = this.UserService.getUsers();
    this.UserService.getAuthenticatedUser().subscribe((data) => {
      if(data){
        this.name = data.name;
      }
    });
  }

 }