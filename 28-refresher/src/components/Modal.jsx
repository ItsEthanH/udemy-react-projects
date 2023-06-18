import classes from './Modal.module.css';

function Modal({ onModalToggle, children }) {
  return (
    <>
      <div className={classes.backdrop} onClick={onModalToggle} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
