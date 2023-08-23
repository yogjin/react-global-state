import { useSyncExternalStore } from 'react';

type Fn = () => void;
type UpdateFn<State> = (prevState: State) => State;
interface GlobalState<State> {
  getState: () => State;
  setState: (newState: State | UpdateFn<State>) => void;
  subscribe: (listener: Fn) => Fn;
}

const isUpdateFn = <State>(value: State | UpdateFn<State>): value is UpdateFn<State> =>
  typeof value === 'function';

export const globalState = <State>(initialState: State): GlobalState<State> => {
  let listeners: Fn[] = [];
  let state = initialState;

  const emitChange = () => {
    for (let listener of listeners) {
      listener(); // 컴포넌트 리렌더링
    }
  };

  const subscribe = (listener: Fn) => {
    // listener === onStoreChange(컴포넌트 리렌더링 함수)
    listeners = [...listeners, listener]; // 구독
    return () => {
      // 구독취소함수 반환
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  const setState = (newState: State | UpdateFn<State>) => {
    state = isUpdateFn(newState) ? newState(state) : newState;
    emitChange();
  };

  const getState = () => state;

  return { getState, setState, subscribe };
};

export const useGlobalState = <State>(globalState: GlobalState<State>) => {
  const state = useSyncExternalStore(globalState.subscribe, globalState.getState);

  return [state, globalState.setState] as const;
};
