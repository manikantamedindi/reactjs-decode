import { createStore } from "./redux.js";

const incButton = document.getElementById("increment");

const reducer = (state, action) => {
  return {
    count: 10,
  };
};

const store = createStore(reducer);

/**
 * Redux store
 * This store is created using the createStore function from redux.js.
 */

console.log(store.getState());
