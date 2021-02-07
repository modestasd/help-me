import { combineReducers } from 'redux';
import setupExampleReducer,{SetupExampleState} from './modules/setupExample/reducer';

export interface RootState {
    readonly setupExample: SetupExampleState
};

const rootReducer = combineReducers<RootState>({
    setupExample: setupExampleReducer,
});

declare module 'react-redux' {
    interface DefaultRootState extends RootState {}
}
  
export default rootReducer;