import { AnyAction } from 'redux';

export interface ErrorState {
  [requestName: string]: boolean;
};

const defaultState: ErrorState = {};

const errorReducer = (state: ErrorState = defaultState, action: AnyAction): ErrorState => {
  const { type } = action;
  const matches = /(.*)_(REQUEST|FAILURE)/.exec(type);
  if (!matches) {
    return state;
  }
  const [, requestName, requestState] = matches;


  return {
    ...state,
    [requestName]: requestState === 'FAILURE',
  };
};

export default errorReducer;
