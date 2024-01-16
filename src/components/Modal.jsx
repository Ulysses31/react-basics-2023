import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css";

function Modal({ children }) {
  const navigate = useNavigate();

  function closeHandler() {
    navigate("/");
  }

  return (
    <div>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog open={true} className={classes.modal}>
        {children}
      </dialog>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Modal;
