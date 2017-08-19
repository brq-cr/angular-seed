// angular
import { Injectable } from '@angular/core';

// libs
import { Store, Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';

// module
import { JokeService } from '../services';
import { Joke } from '../actions';

@Injectable()
export class JokeEffects {

  constructor(
    private store: Store<any>,
    private actions$: Actions,
    private jokeService: JokeService,
  ) { }

  @Effect() getJoke$: Observable<Action> = this.actions$
    .ofType(Joke.ActionTypes.GET_RANDOM)
    .switchMap(() => this.jokeService.getRandomJokeFromServer())
    .map(joke => new Joke.GetRandomSuccessAction(joke))
    .catch(error => Observable.of(new Joke.GetRandomSuccessAction(error)));

  
}
