import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  ////////////first form//////////////
  const {
    value: enteredValue,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlueHandler: inputBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  ///////////////last form//////////////////////
  const {
    value: enteredLast,
    isValid: enteredNameIsValidLast,
    hasError: nameInputHasErrorLast,
    valueChangeHandler: nameChangeHandlerLast,
    inputBlueHandler: inputBlurHandlerLast,
    reset: resetNameInputLast,
  } = useInput((value) => value.trim() !== "");

  ///////////email form//////////////////////////
  const {
    value: enteredEmail,
    isValid: enterEmaiIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlueHandler: emailinputBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (enteredNameIsValid && enterEmaiIsValid && enteredNameIsValidLast) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    console.log("submitted");
    console.log(enteredValue, enteredLast, enteredEmail);

    resetNameInput();
    resetNameInputLast();
    resetEmailInput();
  };

  const nameInputError = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const nameInputErrorLast = nameInputHasErrorLast
    ? "form-control invalid"
    : "form-control";

  const emailinputError = emailInputHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={nameInputError}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={inputBlurHandler}
            value={enteredValue}
          />
          {nameInputHasError && (
            <p className="error-text">First Name is required*</p>
          )}
        </div>
        <div className={nameInputErrorLast}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandlerLast}
            onBlur={inputBlurHandlerLast}
            value={enteredLast}
          />
          {nameInputHasErrorLast && (
            <p className="error-text"> Last name is required*</p>
          )}
        </div>
      </div>
      <div className={emailinputError}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailinputBlurHandler}
          valu={enteredEmail}
        />
        {emailInputHasError && <p className="error-text">Email is required*</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
