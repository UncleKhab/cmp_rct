const redux = require("redux");

// Create a Reducer
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

// Create a Store
const store = redux.createStore(counterReducer);

// Creating a Subscriber
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// Notify the store that there is a subscriber
store.subscribe(counterSubscriber);

// Dispatch an action
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
