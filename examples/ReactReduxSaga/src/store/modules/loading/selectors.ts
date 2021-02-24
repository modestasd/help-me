import { DefaultRootState } from "react-redux";

export type CreateLoadingSelector = (selectors: string[]) => (state: DefaultRootState) => void;

export const createLoadingSelector: CreateLoadingSelector = actions => state => {
  const parsedActions = actions.map((action) => {
    const matches = /(.*)_(REQUEST)/.exec(action);
    if (!matches) {
      throw new Error('Error while geting loading selectors');
    }
    return matches[1];
  });
  return parsedActions.some(action => state.loading[action]);
};
