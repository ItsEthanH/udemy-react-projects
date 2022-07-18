import { useState } from 'react';

import Output from './Output';

function Greeting() {
  const [changedText, setChangedText] = useState(false);

  function changeTextHandler() {
    setChangedText(true);
  }

  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <Output>It's good to see you!</Output>}
      {changedText && <Output>Text changed!</Output>}
      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  );
}

export default Greeting;
