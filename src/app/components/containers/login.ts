import { 
  Component, 
  ChangeDetectionStrategy, 
  Input,
  OnInit,
} from '@angular/core';

import { 
  FormGroup, 
  FormControl, 
  Validators, 
  FormBuilder 
} from "@angular/forms";

import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../../services/notification';
import { AuthenticationService } from '../../services/auth';

import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';

@Component({
  selector: 'ngb-login-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h2>Login</h2>
    <form novalidate (ngSubmit)="login(loginForm)" [formGroup]="loginForm">
        <div>
            <label for="username">Username</label>
            <input type="text" formControlName="username" class="form-control" name="username"/>
            <small *ngIf="loginForm.get('username').hasError('pattern') && loginForm.get('username').touched">
              It must be an email
            </small>
            <small *ngIf="loginForm.get('username').hasError('required') && loginForm.get('username').touched">
              Username is required
            </small>
        </div>
        <div>
            <label for="password">Password</label>
            <input type="password" formControlName="password" class="form-control" name="password"/>
            <small *ngIf="loginForm.get('password').hasError('required') && loginForm.get('password').touched">
              Password is required
            </small>
        </div>
        <button type="submit" [disabled]="!loginForm.valid">Login</button>
        <a [routerLink]="['/register']">Register</a>
    </form>
  `,
})
export class LoginPageComponent implements OnInit { 
  //Reactive/model-driven forms -> https://toddmotto.com/angular-2-forms-reactive
  private returnUrl: string;
  loginForm: FormGroup;
  password = new FormControl("", Validators.required);
  username = new FormControl("", [
    Validators.required,
    Validators.pattern("[^ @]*@[^ @]*")
  ]);
 
  constructor(
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private notificationService: NotificationService,
    private formBuilder: FormBuilder,
  ){}
 
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        "username": this.username,
        "password": this.password,
    });

    // reset login status - make useless a logout component
    this.authenticationService.logOut();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
 
  login({value, valid}) {
    if(valid){
      this.notificationService.clear();
      this.authenticationService.logIn(value);
    }
  }
}
