import React, { useRef, useImperativeHandle } from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const { isValid, value, onChange, onBlur, type, id, label } = props;
  const inputRef = useRef();

  //   useEffect(() => {
  //     inputRef.current.focus();
  //   }, []);
  const activate = () => {
    inputRef.current.focus();
  };

  // translation object, for the outsite components to be able to access
  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });
  return (
    <div
      className={`${classes.control} ${
        isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={id}>{label}</label>
      <input
        ref={inputRef}
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
});
export default Input;
