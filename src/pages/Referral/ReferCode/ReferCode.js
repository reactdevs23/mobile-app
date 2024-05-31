import React, { useState } from "react";
import classes from "./ReferCode.module.css";
import { Button, Text } from "../../../components/common";
import {
  claimCryto,
  copyIcon,
  peopleJoin,
  receivePoint,
  sendReffer,
} from "../../../images";
import InviteFriendModal from "../../../Modals/InviteFriendModal/InviteFriendModal";

const ReferCode = () => {
  const [showInviteFriendModal, setShowInviteFriendModal] = useState(false);
  const steps = [
    { img: sendReffer, info: "Send Refer" },
    { img: peopleJoin, info: "People Join & Trade" },
    { img: receivePoint, info: "Receive Points" },
    { img: claimCryto, info: "Claim crypto rewards" },
  ];
  const copyAddressToClipboard = (depositAddress) => {
    // Copy deposit address to clipboard
    navigator.clipboard.writeText(depositAddress);
  };

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.infoWrapper}>
          <Text base0 xl2 textCenter>
            Refer and Earn
          </Text>
          <Text base400 sm textCenter>
            Refer and Earn is a promotional program where individuals can earn
            rewards or benefits by referring others.
          </Text>
        </div>
        <div className={classes.steps}>
          {steps.map((step, i) => (
            <div className={classes.step} key={i}>
              <div className={classes.imgContainer}>
                <img src={step.img} alt="#" className={classes.img} />
              </div>
              <Text base600 textCenter className={classes.stepInfo}>
                {step.info}
              </Text>
            </div>
          ))}
        </div>{" "}
        <div className={classes.infoContainer}>
          <div className={classes.spaceBetween}>
            <Text base400>Commission Rate</Text>{" "}
            <Text base0 className={classes.value}>
              10%
            </Text>
          </div>{" "}
          <div className={classes.codeContainer}>
            <Text base400>Code</Text>
            <div className={classes.code}>
              <Text base0 base>
                ABCDEB6
              </Text>
              <img
                src={copyIcon}
                alt="#"
                className={classes.copyIcon}
                onClick={() => copyAddressToClipboard("ABCDEB6")}
              />
            </div>
          </div>{" "}
          <div className={classes.linkContainer}>
            <Text base400>Link</Text>
            <div className={classes.link}>
              <Text base0 base>
                {"      https://example.com/rf/abcdeb6"}
              </Text>
              <img
                src={copyIcon}
                alt="#"
                className={classes.copyIcon}
                onClick={() =>
                  copyAddressToClipboard("https://example.com/rf/abcdeb6")
                }
              />
            </div>
          </div>
        </div>
        <Button wFull onClick={() => setShowInviteFriendModal(true)}>
          Invite via Email
        </Button>
      </div>
      <InviteFriendModal
        isActive={showInviteFriendModal}
        onClose={() => setShowInviteFriendModal(false)}
      />
    </>
  );
};

export default ReferCode;
