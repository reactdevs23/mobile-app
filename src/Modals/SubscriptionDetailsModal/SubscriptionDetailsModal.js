import React from "react";
import classes from "./SubscriptionDetailsModal.module.css";
import { Button, Modal, Text } from "../../components/common";

import { coin, token } from "../../images";

const SubscriptionDetailsModal = ({ isActive, onClose }) => {
  return (
    <Modal isActive={isActive} className={classes.wrapper}>
      <img src={token} alt="#" className={classes.img} />
      <div className={classes.infoContainer}>
        <Text xl base0 font600>
          GameFi Tokens
        </Text>
        <Text base base400>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </Text>
      </div>

      <div className={classes.profitAndEarned}>
        <div className={classes.profitWrapper}>
          <Text base400 sm textCenter>
            Profit per hour
          </Text>{" "}
          <div className={classes.profitContainer}>
            <img src={coin} alt="#" className={classes.coin} />{" "}
            <Text base400 sm font600>
              100+
            </Text>
          </div>{" "}
        </div>
        <div className={classes.totalEarned}>
          <Text base400 sm textCenter>
            Total Earned
          </Text>
          <div className={classes.earnedContainer}>
            <img src={coin} alt="#" className={classes.coin} />{" "}
            <Text base400 sm font600>
              100+
            </Text>
          </div>{" "}
        </div>
      </div>

      <div className={classes.buttonContainer}>
        <Button base700 onClick={onClose}>
          Cancel
        </Button>
        <Button
          className={classes.unsubscribe}
          wFull
          onClick={() => {
            onClose();
          }}
        >
          Unsubscribe
        </Button>
      </div>
    </Modal>
  );
};

export default SubscriptionDetailsModal;
