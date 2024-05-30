import React from "react";
import classes from "./TopBar.module.css";
import { TbSettings } from "react-icons/tb";

import { addressImg, walletImg } from "../../images";
import { Text } from "../common";

const TopBar = () => {
  const address = "0x420b595d8b648971b3bfcf46e66544c384860536";
  return (
    <div className={classes.wrapper}>
      <img src={walletImg} className={classes.wallet} alt="#" />
      <div className={classes.addressContainer}>
        <img src={addressImg} alt="#" className={classes.addressImg} />
        <Text sm base0 className={classes.address}>
          {address.slice(0, 4)}...
        </Text>
      </div>
      <TbSettings className={classes.setting} />
    </div>
  );
};

export default TopBar;
