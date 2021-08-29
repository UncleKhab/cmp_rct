import { createStore } from "redux";
//create a default state
const defaultState = {
  counter: 0,
  showCounter: true,
};

//create a reducer
const counterReducer = (state = defaultState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "decrease") {
    return {
      counter: state.counter - action.amount,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "toggle") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }
  return state;
};

//create a store
const store = createStore(counterReducer);

//export the store
export default store;

// You then need to import the provider from react-redux on the highest level (or if you want nested)
// Import the store into same file

// In the file you want to use the store, you import the useSelector / useStore from 'react-redux', this will allow you to get the values
// In the file you want to dispatch actions, you need to use useDispatch hook;
