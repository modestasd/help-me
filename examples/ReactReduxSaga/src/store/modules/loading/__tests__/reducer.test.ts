import * as postActions from 'src/store/modules/posts/actions';
import { GET_POSTS } from 'src/store/modules/posts/constants';
import reducer, { defaultState } from '../reducer';
import {PostsTypes} from 'src/types';

import IPost = PostsTypes.Post;

describe('loading reducer', () => {
  const actionName = GET_POSTS;
  const postsMock: IPost[] = [{body: 'Hello body',id: 1,title: 'TestTitle',userId: 123}];
  const requestAction = postActions.getPostsRequest();
  const successAction = postActions.getPostsSuccess(postsMock);
  const failureAction = postActions.getPostsFailure();

  it('should return default state if action doesnt match regex', () => {
    const state = reducer(undefined, { type: 'action_test' });
    expect(state).toEqual(defaultState);
  });

  it('should handle all REQUEST actions', () => {
    const expectedState = {
      [actionName]: true,
    };
    const state = reducer(undefined, requestAction);
    expect(state).toEqual(expectedState);
  });

  it('should handle all FAILURE actions', () => {
    const expectedState = {
      [actionName]: false,
    };
    const state = reducer(undefined, failureAction);
    expect(state).toEqual(expectedState);
  });

  it('should handle all SUCCESS actions', () => {
    const expectedState = {
      [actionName]: false,
    };
    const state = reducer(undefined, successAction);
    expect(state).toEqual(expectedState);
  });

//   it('should handle multiple actions', () => {
//     //to be added
//   });
});
