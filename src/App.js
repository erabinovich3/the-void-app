import { BsGearFill } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import Input from "./components/Input";
import Modal from "./components/Modal";
import Alert from "./components/Alert";

import "./App.css";
import getResponse from "./utils/response";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showResponse, setShowResponse] = useState("yes");

  const [scream, setScream] = useState("");
  const [voidResponse, setVoidResponse] = useState("Welcome to the Void");

  function handleShowResponseChange(event) {
    setShowResponse(event.target.value);
  }

  function handleScreamChange(event) {
    setScream(event.target.value);
  }

  function changeResponse() {
    if (showResponse === "yes") {
      setVoidResponse(getResponse());
    }
  }

  return (
    <div className="App">
      <header className="header">
        <motion.button
          whileHover={{
            rotate: 90,
          }}
          className="settings-btn"
          onClick={() => setShowModal((showModal) => !showModal)}
        >
          <BsGearFill />
        </motion.button>
      </header>
      <motion.div
        className="main-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          key={voidResponse}
          initial={{ opacity: 0 }}
          animate={showResponse === "yes" ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={
            showResponse === "yes" ? "void-response" : "void-response hidden"
          }
        >
          {voidResponse}
        </motion.div>

        <Input
          scream={scream}
          setScream={setScream}
          handleChange={handleScreamChange}
          handleAlert={() => setShowAlert(true)}
          changeResponse={changeResponse}
        />

        <AnimatePresence initial={false} exitBeforeEnter={true}>
          {showAlert && (
            <Alert
              text="Nothing to scream..."
              handleClose={() => setShowAlert(false)}
            />
          )}

          {showModal && (
            <Modal
              showResponse={showResponse}
              handleChange={handleShowResponseChange}
              handleClose={() => setShowModal(false)}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
