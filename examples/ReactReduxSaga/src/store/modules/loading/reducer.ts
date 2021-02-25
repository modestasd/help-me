import { AnyAction } from 'redux';

export interface LoadingState {
  [requestName: string]: boolean;
};

export const defaultState: LoadingState = {};

const loadingReducer = (state: LoadingState = defaultState, action: AnyAction): LoadingState => {
  const { type } = action;
  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);
  if (!matches) {
    return state;
  };
  const [, requestName, requestState] = matches;

  return {
    ...state,
    [requestName]: requestState === 'REQUEST',
  };
};

export default loadingReducer;
