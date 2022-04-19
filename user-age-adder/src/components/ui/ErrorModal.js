import React from 'react';
import styles from './ErrorModal.module.css';

import Card from './Card';
import Button from './Button';

function ErrorModal(props) {
  function handleButtonClick() {
    props.onButtonClick('', '', false);
  }

  return (
    <div className={props.show ? styles.backdrop : ''}>
      <Card className={`${styles.modal} ${props.show ? '' : 'hidden'}`}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={handleButtonClick}>Ok</Button>
        </footer>
      </Card>
    </div>
  );
}

export default ErrorModal;
