# React-global-state  &middot; [![NPM Version](https://img.shields.io/npm/v/@yogjin/react-global-state)](https://www.npmjs.com/package/@yogjin/react-global-state) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebookexperimental/Recoil/blob/main/LICENSE)
`react-global-state` is simple global state management library for React 18.

## Installation
The Recoil package lives in [npm](https://www.npmjs.com/package/@yogjin/react-global-state)

To install the latest stable version, run the following command:
```sh
npm i @yogjin/react-global-state
```
Or if you're using [yarn](https://yarnpkg.com/getting-started/usage):
```sh
yarn add @yogjin/react-global-state
```

## How to use
Fundamentally, it's very similar to the concept of Recoil. 

`globalState` is similar to `atom` 

`useGlobalState` is similar to `useRecoilState`

### Make `globalState`

```tsx
import { globalState } from '@yogjin/react-global-state';

export const countState = globalState([1]);
```

### Use `useGlobalState`

#### React Component

```tsx
import { countState } from './globalStates';
import { useGlobalState } from '@yogjin/react-global-state';

export default function Component() {
  const [counts, setCounts] = useGlobalState(countState);
  ...
}
```
#### Non-React Code
Even outside of React components, you can use useSetGlobalState to set the globalState. 

Likewise, if there's a change in the state, any component subscribed to that globalState will be re-rendered.

```ts
import { countState } from "./globalStates";
import { useSetGlobalState } from '@yogjin/react-global-state';

const setCountState = useSetGlobalState(countState);

const add100ToCountState = () => {
    setCountState((prevCount) => [...prevCount, 100]);
}
```

### License
`react-global-state` is [MIT licensed](https://github.com/yogjin/react-global-state/blob/main/LICENSE)https://github.com/yogjin/react-global-state/blob/main/LICENSE.
