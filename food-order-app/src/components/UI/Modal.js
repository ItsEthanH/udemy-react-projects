import react from 'react';
import reactDom from 'react-dom';

import classes from './Modal.module.css';

function Backdrop(props) {
  return <div className={classes.backdrop} />;
}

function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

let portalOverlays = document.getElementById('overlays');
function Modal(props) {
  return (
    <react.Fragment>
      {reactDom.createPortal(<Backdrop />, portalOverlays)}
      {reactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalOverlays
      )}
    </react.Fragment>
  );
}

export default Modal;
