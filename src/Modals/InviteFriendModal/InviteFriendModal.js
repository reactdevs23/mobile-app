import React, { useState } from "react";
import classes from "./InviteFriendModal.module.css";
import { Button, Modal, Text } from "../../components/common";
import Input from "../../components/common/Input/Input";

const InviteFriendModal = ({ isActive, onClose }) => {
  const [email, setEmail] = useState("");
  return (
    <Modal
      isActive={isActive}
      onClose={onClose}
      heading="Invite Friend via Email"
      className={classes.modal}
    >
      <div className={classes.wrapper}>
        <Text base500 className={classes.info}>
          We will send the email to your friend with your referral id. Please
          enter your friend email.
        </Text>
        <Input
          noIcon
          value={email}
          setValue={setEmail}
          type="email"
          placeholder="Enter email"
          className={classes.input}
        />
        <Button
          wFull
          onClick={() => {
            onClose();
          }}
        >
          Invite
        </Button>
      </div>
    </Modal>
  );
};

export default InviteFriendModal;
