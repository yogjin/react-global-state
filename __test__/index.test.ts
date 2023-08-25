import { globalState, useSetGlobalState } from './../src/index';

test('non-react 코드에서 global state 저장이 잘 된다.', () => {
  const state = globalState(1);
  const setState = useSetGlobalState(state);

  setState(2);

  expect(state.getState()).toEqual(2);
});
