import { useState, useReducer } from "react";

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value };
  }
  if (action.type === "BLUR") return { isTouched: true };
  if (action.type === "RESET") return initialInputState;
  return {
    value: "",
    isTouched: false,
  };
};
const initialInputState = {
  value: "",
  isTouched: false,
};

const useValidation = (validationLogic) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );
  // const [inputValue, setInputValue] = useState("");
  // const [isTouched, setIsTouched] = useState(false);

  let isValid = validationLogic(inputState.value);
  let hasError = !isValid && inputState.isTouched;

  const changeHandler = (e) => {
    dispatch({
      type: "INPUT",
      value: e.target.value,
    });
  };
  const blurHandler = () => {
    dispatch({
      type: "BLUR",
    });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    inputValue: inputState.value,
    isTouched: inputState.isTouched,
    isValid,
    hasError,
    changeHandler,
    blurHandler,
    reset,
  };
};

export default useValidation;
