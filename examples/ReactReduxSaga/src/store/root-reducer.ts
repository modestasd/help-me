import { combineReducers } from 'redux';
import setupExampleReducer,{SetupExampleState} from './modules/setupExample/reducer';

export interface RootState {
    setupExample: SetupExampleState
} 

const rootReducer = combineReducers<RootState>({
    setupExample: setupExampleReducer,
});

export default rootReducer;