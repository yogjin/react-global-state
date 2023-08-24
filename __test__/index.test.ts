import { globalState } from './../src/index';

test('global state 저장이 잘 된다.', () => {
  const { getState, setState } = globalState(1);

  expect(getState()).toEqual(1);

  setState(2);

  expect(getState()).toEqual(2);
});
