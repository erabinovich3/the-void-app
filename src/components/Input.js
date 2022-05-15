import React from "react";
import { motion, useAnimation } from "framer-motion";

const screamBoxVariants = {
  float: {
    y: -10,
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
  glow: {
    boxShadow: "0px 0px 5px 3px rgb(255, 255, 255)",
    transition: {
      ease: "easeInOut",
      duration: 1.5,
    },
  },
  fling: {
    rotate: [0, 360, 0, 0],
    scale: [1, 0, 0, 1],
    transition: {
      times: [0, 0.5, 0.65, 1],
      duration: 4,
    },
  },
};

function Input({
  scream,
  setScream,
  handleChange,
  handleAlert,
  changeResponse,
}) {
  const controls = useAnimation();

  return (
    <div className="scream-box">
      <motion.textarea
        className="scream-content"
        value={scream}
        placeholder="scream into the void"
        onChange={handleChange}
        variants={screamBoxVariants}
        whileHover={["glow", "float"]}
        animate={controls}
      ></motion.textarea>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="scream-btn"
        onClick={() => {
          if (scream) {
            controls.start("fling");
            changeResponse();
            setTimeout(() => {
              setScream("");
            }, 2000);
          } else {
            handleAlert();
          }
        }}
      >
        Scream
      </motion.button>
    </div>
  );
}

export default Input;
