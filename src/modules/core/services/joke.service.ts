import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Joke } from './../actions';

import 'rxjs/add/operator/map';

@Injectable()
export class JokeService {

  jokeState$: Observable<any>;

  constructor (
    private store: Store<any>,
    private http: Http,
  ) {
    this.jokeState$ = this.store.select('joke') as Observable<any>;
  }

  getRandomJokeState() {
    return this.jokeState$.map(store => store.randomJoke);
  }

  getRandomJoke() {
    this.store.dispatch(new Joke.GetRandomAction());
  }

  getRandomJokeFromServer(): Observable<string> {
    return this.http.get('http://api.icndb.com/jokes/random/')
      .map(res => res.json())
      .map(res => res.value ? res.value.joke : '');
  }
}