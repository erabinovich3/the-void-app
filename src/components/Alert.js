import React from "react";
import { IoClose } from "react-icons/io5";
import Backdrop from "./Backdrop";
import { motion } from "framer-motion";

function Alert({ text, handleClose }) {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className="alert"
        animate={{ scale: [0, 1.3, 1] }}
        exit={{ scale: 0 }}
      >
        <div className="alert-content">{text}</div>
        <button className="alert-btn" onClick={handleClose}>
          <IoClose className="close-icon" />
        </button>
      </motion.div>
    </Backdrop>
  );
}

export default Alert;
