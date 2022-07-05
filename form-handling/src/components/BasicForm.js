import useInput from '../hooks/useInput';

const BasicForm = () => {
  const {
    value: fnameValue,
    isValid: fnameIsValid,
    hasError: fnameHasError,
    valueChangeHandler: fnameChangeHandler,
    inputBlurHandler: fnameBlurHandler,
    reset: fnameReset,
  } = useInput((value) => value.trim() !== '');

  const {
    value: lnameValue,
    isValid: lnameIsValid,
    hasError: lnameHasError,
    valueChangeHandler: lnameChangeHandler,
    inputBlurHandler: lnameBlurHandler,
    reset: lnameReset,
  } = useInput((value) => value.trim() !== '');

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes('@'));

  let isFormValid = false;

  if (fnameIsValid && lnameIsValid && emailIsValid) {
    isFormValid = true;
  }

  function formSubmitHandler(event) {
    event.preventDefault();

    if (!fnameIsValid || !lnameIsValid || emailIsValid) {
      return;
    }

    console.log(fnameValue);
    console.log(lnameValue);
    console.log(emailValue);

    fnameReset();
    lnameReset();
    emailReset();
  }

  const fnameStyles = fnameHasError ? 'form-control invalid' : 'form-control';
  const lnameStyles = lnameHasError ? 'form-control invalid' : 'form-control';
  const emailStyles = emailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={fnameStyles}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={fnameValue}
            onChange={fnameChangeHandler}
            onBlur={fnameBlurHandler}
          />
        </div>
        <div className={lnameStyles}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lnameValue}
            onChange={lnameChangeHandler}
            onBlur={lnameBlurHandler}
          />
        </div>
      </div>
      <div className={emailStyles}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
      </div>
      {fnameHasError && <p className="error-text">Please enter a first name</p>}
      {lnameHasError && <p className="error-text">Please enter a last name</p>}
      {emailHasError && (
        <p className="error-text">Please enter a valid email</p>
      )}
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
