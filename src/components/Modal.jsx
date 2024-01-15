import PropTypes from "prop-types";
import classes from "./Modal.module.css";

function Modal({ children, onClose }) {
  return (
    <div>
      <div className={classes.backdrop} onClick={onClose} />
      <dialog open={true} className={classes.modal}>
        {children}
      </dialog>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
