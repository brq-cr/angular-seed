import { Joke } from '../actions';

interface IState {
  randomJoke: string;
}

const initialState: IState = {
  randomJoke: `Click "Get a joke !" to try`
};

export function jokeReducer(
  state: IState = initialState,
  action: Joke.Actions
): IState {
  switch (action.type) {
    case Joke.ActionTypes.GET_RANDOM_SUCCESS:
      return (<any>Object).assign({}, state, {
        randomJoke: action.payload
      });

    default:
      return state;
  }
}