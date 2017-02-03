import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterStoreModule } from '@ngrx/router-store';
import { ApolloModule } from 'angular2-apollo';

import { ComponentsModule } from './app.components';
import { UserEffects } from './data-flow/effects/user';
import { AuthenticationEffects } from './data-flow/effects/auth';

import { UserActions } from './data-flow/actions/user';
import { NotificationActions } from './data-flow/actions/notification';
import { LoadingActions } from './data-flow/actions/loading';
import { AuthenticationActions } from './data-flow/actions/auth';

import { AuthGuard } from './guards/auth';
import { GraphService } from './services/graph';
import { UserService } from './services/user';
import { NotificationService } from './services/notification';
import { LoadingService } from './services/loading';
import { AuthenticationService } from './services/auth';

import { AppComponent } from './components/containers/app';
import { HomePageComponent } from './components/containers/home';
import { NotFoundPageComponent } from './components/containers/not-found';
import { LoginPageComponent } from './components/containers/login';
import { RegisterPageComponent } from './components/containers/register';

import { routes } from './app.routes';
import { reducer } from './data-flow/reducers';
import { provideClient } from './app.client';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NotFoundPageComponent,
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    ApolloModule.withClient(provideClient),
    EffectsModule.run(UserEffects),
    EffectsModule.run(AuthenticationEffects),
    RouterModule.forRoot(routes, { useHash: true }),
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter(),
  ],
  providers: [
    AuthGuard,
    GraphService, UserService, NotificationService, LoadingService, AuthenticationService,
    UserActions, NotificationActions, LoadingActions, AuthenticationActions,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
