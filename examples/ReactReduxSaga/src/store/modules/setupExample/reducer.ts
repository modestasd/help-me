  
import { combineActions, handleActions } from 'redux-actions';
import { actionsType, decrement, increment } from './actions';
import * as SETUP_EXAMPLE_TYPES from './constants';

export interface SetupExampleState {
    counter: number;
};
 
const defaultState: SetupExampleState = {
    counter: 0
};
  

// const setupExampleReducer = (
//   state: SetupExampleState = defaultState,
//   action: actionsType
// ):SetupExampleState => {
//     console.log(state)
//   switch (action.name) {
//     case SETUP_EXAMPLE_TYPES.INCREMENT:
//       return {
//         ...state,  
//         counter: state.counter++
//     }
//     case SETUP_EXAMPLE_TYPES.DECREMENT:
//         return {
//         ...state,  
//         counter: state.counter--
//     }
//     // case 'heloo':
//     //         return state.counter--;
//     default: 
//         return state
//   }
// }

const setupExampleReducer = handleActions(
    {
      [SETUP_EXAMPLE_TYPES.INCREMENT]: (state) => ({
        ...state,
        counter: state.counter +1
      }),
      [SETUP_EXAMPLE_TYPES.DECREMENT]: (state) => ({
        ...state,
        counter: state.counter -1
      }),
    },
    defaultState
  );

export default setupExampleReducer;