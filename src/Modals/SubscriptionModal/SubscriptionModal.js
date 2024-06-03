import React from "react";
import classes from "./SubscriptionModal.module.css";
import { Button, Modal, Text } from "../../components/common";

import { coin, token } from "../../images";

const SubscriptionModal = ({ isActive, onClose }) => {
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

      <div className={classes.details}>
        <div className={classes.profitLevelCost}>
          <div className={classes.profitAndLevel}>
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
            <div className={classes.levelRequired}>
              <Text base400 sm textCenter>
                Profit per hour
              </Text>
              <Text base0 base font600 textCenter>
                Bronze
              </Text>
            </div>
          </div>
        </div>
        <div className={classes.costContainer}>
          <Text base400>Cost</Text>
          <div className={classes.costValue}>
            {" "}
            <img src={coin} alt="#" className={classes.coin} />{" "}
            <Text base0 sm font600 xl2>
              1000
            </Text>
          </div>
        </div>
      </div>

      <div className={classes.buttonContainer}>
        <Button base700 onClick={onClose}>
          Cancel
        </Button>
        <Button
          wFull
          onClick={() => {
            onClose();
          }}
        >
          Subscribe
        </Button>
      </div>
    </Modal>
  );
};

export default SubscriptionModal;
