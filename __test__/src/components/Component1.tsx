import React from 'react';
import { useGlobalState } from '../../../src';
import { countState } from '../globalState';

export default function Component1() {
  // 1. Component에서 `GlobalState`를 이용해 `useGlobalState`를 호출한다.
  const [counts, setCounts] = useGlobalState(countState);

  const addCount = () => {
    // 3. Component 는 `useGlobalState`에게 받은 `setState`를 호출하여 `GlobalState`를 변경한다.
    setCounts((prevCounts) => {
      return [...prevCounts, prevCounts.length + 1];
    });
  };

  return (
    <>
      <h1>Component1</h1>
      <button onClick={addCount}>Add Count</button>
      <hr />
      <ul>
        {counts.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </>
  );
}
