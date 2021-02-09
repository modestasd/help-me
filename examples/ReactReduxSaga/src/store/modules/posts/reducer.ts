  import { handleActions } from 'redux-actions';
import * as POSTS_TYPES from './constants';


export interface SetupExampleState {
    isLoading: boolean;
};
 

const getPosts = (state: SetupExampleState): SetupExampleState => ({
  ...state,
  isLoading: true,
});

const defaultState: SetupExampleState = {
    isLoading: false
};

const setupExampleReducer = handleActions(
    {
      [POSTS_TYPES.GET_POSTS_REQUEST]: (state) => getPosts(state),
    },
    defaultState
  );

export default setupExampleReducer;