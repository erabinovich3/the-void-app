import { motion } from "framer-motion";
import Backdrop from "./Backdrop";

const dropIn = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: "0", opacity: 1 },
  exit: { y: "100vh", opacity: 0 },
};

function Modal({ handleClose, showResponse, handleChange }) {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="modal-content">
          <p className="modal-title">Settings</p>
          <p>Allow the void to respond?</p>
          <form name="void-reply-form">
            <div className="option-group">
              <input
                type="radio"
                id="yes"
                name="void-replies"
                value="yes"
                checked={showResponse === "yes"}
                onChange={handleChange}
              />
              <label htmlFor="yes">Yes</label>
            </div>
            <div className="option-group">
              <input
                type="radio"
                id="no"
                name="void-replies"
                value="no"
                checked={showResponse === "no"}
                onChange={handleChange}
              />
              <label htmlFor="no">No</label>
            </div>
          </form>
        </div>
        <button className="modal-btn" onClick={handleClose}>
          Close
        </button>
      </motion.div>
    </Backdrop>
  );
}

export default Modal;
