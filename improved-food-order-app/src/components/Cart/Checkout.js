import { useState, useContext } from 'react';
import useInput from '../../hooks/useInput';

import CheckoutInput from './CheckoutInput';

import classes from './Checkout.module.css';
import CartContext from '../../store/cart-context';

function Checkout(props) {
  const [formIsSent, setFormIsSent] = useState(false);
  const cartCtx = useContext(CartContext);

  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    setIsTouched: nameSetIsTouched,
    valueChangeHandler: nameValueChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== '');

  const {
    value: streetValue,
    isValid: streetIsValid,
    hasError: streetHasError,
    setIsTouched: streetSetIsTouched,
    valueChangeHandler: streetValueChangeHandler,
    inputBlurHandler: streetInputBlurHandler,
    reset: streetReset,
  } = useInput((value) => value.trim() !== '');

  const {
    value: cityValue,
    isValid: cityIsValid,
    hasError: cityHasError,
    setIsTouched: citySetIsTouched,
    valueChangeHandler: cityValueChangeHandler,
    inputBlurHandler: cityInputBlurHandler,
    reset: cityReset,
  } = useInput((value) => value.trim() !== '');

  const {
    value: postcodeValue,
    isValid: postcodeIsValid,
    hasError: postcodeHasError,
    setIsTouched: postcodeSetIsTouched,
    valueChangeHandler: postcodeValueChangeHandler,
    inputBlurHandler: postcodeInputBlurHandler,
    reset: postcodeReset,
  } = useInput((value) => value.trim() !== '');

  async function submitHandler(event) {
    event.preventDefault();

    // sets all inputs to 'touched', to highlight errors for inputs which may have not been touched yet
    nameSetIsTouched(true);
    streetSetIsTouched(true);
    citySetIsTouched(true);
    postcodeSetIsTouched(true);

    const formIsValid =
      nameIsValid && streetIsValid && cityIsValid && postcodeIsValid;

    if (!formIsValid) {
      return;
    }

    try {
      const response = await fetch(
        'https://react-meals-fe8e6-default-rtdb.europe-west1.firebasedatabase.app/orders.json',
        {
          method: 'POST',
          body: JSON.stringify({
            order: cartCtx.items,
            name: nameValue,
            street: streetValue,
            city: cityValue,
            postcode: postcodeValue,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          'Something went wrong. Please contact the app developers so they can learn how to code!'
        );
      }
    } catch (err) {
      setFormIsSent(err.message);
      return;
    }

    nameReset();
    streetReset();
    cityReset();
    postcodeReset();
    cartCtx.clearCart();
    setFormIsSent('Your order has been submitted. Thank you!');
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      {!formIsSent && (
        <>
          <CheckoutInput
            id="name"
            label="Name"
            value={nameValue}
            onChange={nameValueChangeHandler}
            onBlur={nameInputBlurHandler}
            hasError={nameHasError}
            errorMessage="Please enter a name"
          />
          <CheckoutInput
            id="street"
            label="Street"
            value={streetValue}
            onChange={streetValueChangeHandler}
            onBlur={streetInputBlurHandler}
            hasError={streetHasError}
            errorMessage="Please enter a street"
          />
          <CheckoutInput
            id="city"
            label="City"
            value={cityValue}
            onChange={cityValueChangeHandler}
            onBlur={cityInputBlurHandler}
            hasError={cityHasError}
            errorMessage="Please enter a city"
          />
          <CheckoutInput
            id="postcode"
            label="Postcode"
            value={postcodeValue}
            onChange={postcodeValueChangeHandler}
            onBlur={postcodeInputBlurHandler}
            hasError={postcodeHasError}
            errorMessage="Please enter a postcode"
          />
        </>
      )}
      {formIsSent && <p className="centered">{formIsSent}</p>}
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
}

export default Checkout;
