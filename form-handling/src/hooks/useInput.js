import { useState } from 'react';

function useInput(validateValueFn) {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validateValueFn(value);
  const hasError = !isValid && isTouched;

  function valueChangeHandler(event) {
    setValue(event.target.value);
  }

  function inputBlurHandler() {
    setIsTouched(true);
  }

  function reset() {
    setValue('');
    setIsTouched(false);
  }

  return {
    value,
    isValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
}

export default useInput;
