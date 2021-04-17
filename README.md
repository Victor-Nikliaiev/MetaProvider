> # MetaProvider v0.1 + useMetaService hook (for REDUX + React)
>
> ## With implementation to simple React + Redux app

This is a simple REDUX project, where I created and implemented MetaProvider and showed how to use it with useMetaService hook
It was created for easier implementation of REDUX into your React application.

How to use this provider you can find in comment sections inside `MetaProvider.jsx` that is located on `src\providers\MetaProvider.jsx`

> #### Some tips:

After you create your actions and reducers, you can fluently go to the provider.
First, to make your provider working don't forget to wrap in your app at `index.js` for example.:

```javascript
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MetaProvider } from "./providers/MetaProvider";

ReactDOM.render(
  <React.StrictMode>
    <MetaProvider>
      <App />
    </MetaProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

Then let's have a quick look at our provider.

1. We need all reducers, actions and libraries in case to use provider:

```javascript
// All we need to create a provider
import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";

//Actions
import { toggleAuthAct } from "../actions/authActions";
import {
  depositAct,
  withdrawAct,
  collectInterestAct,
  deleteAccountAct,
  toggleAccountAct,
} from "../actions/bankingActions";

// Reducers
import { rootReducer } from "../reducers/combineReducer";
```

2. Then we create an object that will contain all our actions and variables of initial state from reducers.
   in our case we use two reducers, we create an object with two objects inside to better sort all our variables

```javascript
const VARS = { auth: {}, banking: {} };
```

3. We go to the part where we create our variables( how to create it I left in comment in `MetaProvider.jsx` )
   Here is just a little example for a variable and for action, all our variables we put in special inner component called MetaTag(this component is only for making the provider working, you need nothing to do about it):

```javascript
// auth
VARS.useIsLoggedIn = () => useSelector((state) => state.auth.isLoggedIn);
VARS.auth.toggleAuthAct = () => dispatch(toggleAuthAct());
```

4. Then we create our store:

```javascript
const store = createStore(rootReducer);
```

5. And one before final step is to wrap all children and MetaTag in Provider. I recommend not change anything there :D, it's already done for you. But feel free if you like.

```javascript
<Provider store={store}>
  <MetaTag />
  {children}
</Provider>
```

6. Final step. we create our useMetaService hook, put there our variables and exporting it:

```javascript
export const useMetaService = () => ({
  auth: {
    isLoggedIn: VARS.useIsLoggedIn(),
    toggleAuthAct: VARS.auth.toggleAuthAct,
  },
  banking: {
    balance: VARS.useBalance(),
    //... etc...
  },
});
```

And that's all! :D
feel free to to take a look at `MetaProvider.jsx` and component to understand how it works.

In the future I want to automate creating variables to make all experience even better.

When we setup all the variables, now we can fluently use it in our component:

```javascript
import React from "react";
import { useMetaService } from "../providers/MetaProvider";

const Auth = () => {
  const { auth } = useMetaService();

  return (
    <div>
      <button onClick={() => auth.toggleAuthAct()} className="btn btn-info">
        {auth.isLoggedIn ? "logout" : "login"}
      </button>
    </div>
  );
};

export default Auth;
```

> # Features:

1. All variables, that is wrapped in provider are reusable in any part of your app with easy navigation that you provide only once in `MetaProvider.jsx`
2. You don't need to import neither of `redux` or `react-redux`components to your react app. Only custom `useMetaService` hook (by the way, you can change names for it if you wish) to make all works.

If you like it just give a star. Thanks!

Let's make a better world together!
Have a productive time!

> # Live version:

You can test it [here](https://meta-provider.vercel.app/)