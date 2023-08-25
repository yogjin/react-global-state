import React from 'react';
import { useGlobalStateValue } from '../../../src';
import { countState } from '../globalState';

export default function Component2() {
  const counts = useGlobalStateValue(countState);

  return (
    <>
      <h1>Component2</h1>
      <hr />
      <ul>
        {counts.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </>
  );
}
