import React from "react";
import classes from "./WithdrawConfirmationModal.module.css";
import { Modal, Text } from "../../components/common";
import clsx from "clsx";

const WithdrawConfirmationModal = ({ isActive, onClose, setSwap }) => {
  return (
    <Modal isActive={isActive} className={classes.modal}>
      <div className={classes.infoContainer}>
        {" "}
        <Text xl base0 font600>
          Are you sure you want to withdraw this fund?
        </Text>
        <Text base base500>
          Ensure that your provided address is accurate and on the same network.
          Please note that transactions cannot be cancelled.
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
          Withdraw
        </button>
      </div>
    </Modal>
  );
};

export default WithdrawConfirmationModal;
