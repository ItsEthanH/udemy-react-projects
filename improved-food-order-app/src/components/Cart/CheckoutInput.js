import classes from './CheckoutInput.module.css';

function CheckoutInput(props) {
  return (
    <div className={classes.control}>
      <label htmlFor={props.id}>{props.label}</label>
      <input type="text" id={props.id} />
    </div>
  );
}

export default CheckoutInput;
