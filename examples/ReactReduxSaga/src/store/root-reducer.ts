import { combineReducers } from 'redux';
import postsReducer,{PostsState} from './modules/posts/reducer';

export interface RootState {
    readonly posts: PostsState
};

const rootReducer = combineReducers<RootState>({
    posts: postsReducer,
});

declare module 'react-redux' {
    interface DefaultRootState extends RootState {}
}
  
export default rootReducer;