  
import { handleActions } from 'redux-actions';

import * as SETUP_EXAMPLE_TYPES from './constants';

export interface SetupExampleState {
    counter: number;
};
 
const increment = (state: SetupExampleState): SetupExampleState => ({
  ...state,
  counter: state.counter +1
});

const decrement = (state: SetupExampleState): SetupExampleState => ({
  ...state,
  counter: state.counter -1
});

const defaultState: SetupExampleState = {
    counter: 0
};

const setupExampleReducer = handleActions(
    {
      [SETUP_EXAMPLE_TYPES.INCREMENT]: (state) => increment(state),
      [SETUP_EXAMPLE_TYPES.DECREMENT]: (state) => decrement(state),
    },
    defaultState
  );

export default setupExampleReducer;