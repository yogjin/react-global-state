import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { globalState, useSetGlobalState } from '../src/index';
import Component1 from './src/components/Component1';
import Component2 from './src/components/Component2';

test('non-react 코드에서 global state 저장이 잘 된다.', () => {
  const state = globalState(1);
  const setState = useSetGlobalState(state);

  setState(2);

  expect(state.getState()).toEqual(2);
});

test('컴포넌트들끼리 glabalState 공유가 잘 된다.', async () => {
  render(
    <div>
      <Component1 />
      <Component2 />
    </div>
  );

  userEvent.click(screen.getByText('Add Count'));
  userEvent.click(screen.getByText('Add Count'));

  const countsOf2 = await screen.findAllByText('2');
  expect(countsOf2).toHaveLength(2);
  const countsOf3 = await screen.findAllByText('3');
  expect(countsOf3).toHaveLength(2);
});
