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

import { NotificationService } from '../../services/notification';
import { AuthenticationService } from '../../services/auth';
import { UserService } from '../../services/user';

import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';

@Component({
  selector: 'ngb-register-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h2>Register</h2>
    <form novalidate (ngSubmit)="register(registerForm)" [formGroup]="registerForm">
      <div>
        <label for="name">Name</label>
        <input type="text" formControlName="name" class="form-control" name="name"/>
        <small *ngIf="registerForm.get('name').hasError('required') && registerForm.get('name').touched">
          Name is required
        </small>
      </div>
      <div>
        <label for="username">Username</label>
        <input type="text" formControlName="username" class="form-control" name="username"/>
        <small *ngIf="registerForm.get('username').hasError('pattern') && registerForm.get('username').touched">
          It must be an email
        </small>
        <small *ngIf="registerForm.get('username').hasError('required') && registerForm.get('username').touched">
          Username is required
        </small>
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" formControlName="password" class="form-control" name="password"/>
        <small *ngIf="registerForm.get('password').hasError('required') && registerForm.get('password').touched">
          Password is required
        </small>
      </div>
      <button type="submit" [disabled]="!registerForm.valid">Register</button>
      <a [routerLink]="['/login']">Login</a>
    </form>
  `,
})
export class RegisterPageComponent implements OnInit {
  registerForm: FormGroup;
  name = new FormControl("", Validators.required);
  password = new FormControl("", Validators.required);
  username = new FormControl("", [
    Validators.required,
    Validators.pattern("[^ @]*@[^ @]*")
  ]);

  constructor(
    private authenticationService: AuthenticationService,
    private notificationService: NotificationService,
    private userService: UserService,
    private formBuilder: FormBuilder,
  ){}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        "name": this.name,
        "username": this.username,
        "password": this.password,
    });

    this.authenticationService.logOut();
  }

  register({value, valid}) {
    if(valid){
      this.notificationService.clear();
      this.userService.addUser(value);
    }
  }
}
