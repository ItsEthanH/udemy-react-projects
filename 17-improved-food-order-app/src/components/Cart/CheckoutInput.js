import classes from './CheckoutInput.module.css';

function CheckoutInput(props) {
  const errorStyles = props.hasError ? classes.invalid : '';

  return (
    <div className={`${classes.control} ${errorStyles}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type="text"
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      {props.hasError && <p className={classes.error}>{props.errorMessage}</p>}
    </div>
  );
}

export default CheckoutInput;
