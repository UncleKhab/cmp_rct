import { useState } from "react";
import useValidation from "../hooks/use-validation";
const isNotEmpty = (value) => value.trim() !== "";
const BasicForm = (props) => {
  const {
    inputValue: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    changeHandler: firstNameChangeHandler,
    blurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useValidation(isNotEmpty);

  const {
    inputValue: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    changeHandler: lastNameChangeHandler,
    blurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useValidation(isNotEmpty);

  const {
    inputValue: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    reset: emailReset,
  } = useValidation((value) => value.includes("@"));

  let formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) return;
    firstNameReset();
    lastNameReset();
    emailReset();
  };
  let firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";

  let lastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";

  let emailClasses = emailHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && (
            <p className="error-text">Please fill out this field!</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && (
            <p className="error-text">Please fill out this field!</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className="error-text">Please provide a valid Email Address</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
