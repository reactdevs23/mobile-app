import React, { useState } from "react";
import classes from "./TopBar.module.css";
import { TbSettings } from "react-icons/tb";

import { addressImg, walletImg } from "../../images";
import { Text } from "../common";
import TransactionSettingsModal from "../../Modals/TransactionSettingsModal/TransactionSettingsModal";
import { Link } from "react-router-dom";

const TopBar = () => {
  const address = "0x420b595d8b648971b3bfcf46e66544c384860536";
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  return (
    <>
      <div className={classes.wrapper}>
        <Link to="/">
          <img src={walletImg} className={classes.wallet} alt="#" />
        </Link>
        <div className={classes.addressContainer}>
          <img src={addressImg} alt="#" className={classes.addressImg} />
          <Text sm base0 className={classes.address}>
            {address.slice(0, 4)}...
          </Text>
        </div>
        <TbSettings
          className={classes.setting}
          onClick={() => setShowSettingsModal(true)}
        />
      </div>
      <TransactionSettingsModal
        isActive={showSettingsModal}
        onClose={() => setShowSettingsModal(false)}
      />
    </>
  );
};

export default TopBar;
