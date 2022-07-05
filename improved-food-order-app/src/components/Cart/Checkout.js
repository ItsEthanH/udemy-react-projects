import { useRef, useState } from 'react';

import classes from './Checkout.module.css';

const isEmpty = (value) => value.trim() === '';

const Checkout = (props) => {
  const [formInputsErrorShown, setFormInputsErrorShown] = useState({
    name: false,
    street: false,
    city: false,
    postcode: false,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const cityInputRef = useRef();
  const postcodeInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredPostcode = postcodeInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostcodeIsValid = !isEmpty(enteredPostcode);

    // if the entered value is not valid, and error should be shown, thus the inverse of the validity variable is given
    setFormInputsErrorShown({
      name: !enteredNameIsValid,
      street: !enteredStreetIsValid,
      city: !enteredCityIsValid,
      postcode: !enteredPostcodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostcodeIsValid;

    if (!formIsValid) {
      return;
    }
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          formInputsErrorShown.name ? classes.invalid : ''
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {formInputsErrorShown.name && <p>Please enter a name</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputsErrorShown.street ? classes.invalid : ''
        }`}
      >
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {formInputsErrorShown.street && <p>Please enter a street</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputsErrorShown.city ? classes.invalid : ''
        }`}
      >
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {formInputsErrorShown.city && <p>Please enter a city</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputsErrorShown.postcode ? classes.invalid : ''
        }`}
      >
        <label htmlFor="postcode">Postcode</label>
        <input type="text" id="postcode" ref={postcodeInputRef} />
        {formInputsErrorShown.postcode && <p>Please enter a postcode</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
