import { useState, useEffect } from 'react';

function useCounter(isIncrementing = true) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isIncrementing) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isIncrementing]);

  return counter;
}

export default useCounter;
