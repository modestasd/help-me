import { createAction } from 'redux-actions';
import * as SETUP_EXAMPLE_TYPES from './constants';

export const increment = createAction(SETUP_EXAMPLE_TYPES.INCREMENT);
export const decrement = createAction(SETUP_EXAMPLE_TYPES.DECREMENT);
