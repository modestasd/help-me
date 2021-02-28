import {combineReducers} from 'redux';
import errorReducer,{ErrorState} from './modules/error/reducer';
import loadingReducer,{LoadingState} from './modules/loading/reducer';
import postsReducer,{PostsState} from './modules/posts/reducer';

export interface RootState {
    readonly error: ErrorState,
    readonly loading: LoadingState,
    readonly posts: PostsState,
};

const rootReducer = combineReducers<RootState>({
    error: errorReducer,
    loading: loadingReducer,
    posts: postsReducer,
});

declare module 'react-redux' {
    interface DefaultRootState extends RootState {}
}
  
export default rootReducer;