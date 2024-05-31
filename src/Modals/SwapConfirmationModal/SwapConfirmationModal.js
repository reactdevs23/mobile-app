import React from "react";
import classes from "./SwapConfirmationModal.module.css";
import { Modal, Text } from "../../components/common";
import clsx from "clsx";

const SwapConfirmationModal = ({ isActive, onClose }) => {
  return (
    <Modal isActive={isActive} className={classes.modal}>
      <div className={classes.infoContainer}>
        {" "}
        <Text xl base0 font600>
          Are you sure you want to swap your crypto?
        </Text>
        <Text base base500>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Text>
      </div>
      <div className={classes.buttonContainer}>
        <button className={clsx(classes.button)} onClick={onClose}>
          Cancel
        </button>{" "}
        <button
          className={clsx(classes.button, classes.activeButton)}
          onClick={() => {
            onClose();
          }}
        >
          Swap
        </button>
      </div>
    </Modal>
  );
};

export default SwapConfirmationModal;
