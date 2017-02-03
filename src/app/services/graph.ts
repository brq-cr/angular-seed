import { Angular2Apollo } from 'angular2-apollo';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { UsersQuery, LogInMutation, MeQuery, AddUserMutation } from './graph-queries';

@Injectable()
export class GraphService {
  
  constructor(private apollo: Angular2Apollo) {}

  fetchUsers (): Observable<any> {
    const variables = {
      first: 20,
    }
    return this.apollo.watchQuery({
      query: UsersQuery,
      variables,
    }).map(data => data.data);
  }

  me (): Observable<any> {
    return this.apollo.watchQuery({
      query: MeQuery,
    }).map(data => data.data);
  }

  logIn (variables): Observable<any> {
    return this.apollo.mutate({
      mutation: LogInMutation,
      variables,
    }).map(data => data.data.LoginEmail);
  }

  addUser (variables): Observable<any> {
    return this.apollo.mutate({
      mutation: AddUserMutation,
      variables,
    }).map(data => data.data.RegisterEmail);
  }

}