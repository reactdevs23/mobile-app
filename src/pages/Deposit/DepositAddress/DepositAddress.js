import React from "react";
import classes from "./DepositAddress.module.css";

import { Button, Text } from "../../../components/common";
import Header from "../Header/Header";
import { copyIcon, qrCode } from "../../../images";

const DepositAddress = () => {
  const downloadQRCode = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = qrCode;
    downloadLink.download = "qrCode.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  const copyAddressToClipboard = (depositAddress) => {
    // Copy deposit address to clipboard
    navigator.clipboard.writeText(depositAddress);
  };
  return (
    <div className={classes.wrapper}>
      <Header heading="Deposit" />
      <div className={classes.qrCodeContainer}>
        <img src={qrCode} alt="#" className={classes.qrCode} />
      </div>
      <Text base500 sm textCenter className={classes.info}>
        Supported only USDT in this deposit address. Please note that:
        depositing via another network may result in loss of assets.
      </Text>
      <div className={classes.infoContainer}>
        <div className={classes.addressContainer}>
          <Text base400>Deposit Address</Text>
          <div className={classes.address}>
            <Text base0 base className={classes.myAddress}>
              {"RO98jvbVe8Rlnk6bmphM8DorEnKkE".slice(0, 20)}
              ...{" "}
            </Text>
            <img
              src={copyIcon}
              alt="#"
              className={classes.copyIcon}
              onClick={() =>
                copyAddressToClipboard("RO98jvbVe8Rlnk6bmphM8DorEnKkE")
              }
            />
          </div>
        </div>
        <div className={classes.spaceBetween}>
          <Text base400>Network</Text> <Text base0>Ethereum (ERC20)</Text>
        </div>{" "}
        <div className={classes.spaceBetween}>
          <Text base400>Network</Text>{" "}
          <Text base0 className={classes.value}>
            Ethereum (ERC20)
          </Text>
        </div>{" "}
        <div className={classes.spaceBetween}>
          <Text base400>Minimum deposit</Text>{" "}
          <Text base0 className={classes.value}>
            Expected arrival{" "}
          </Text>
        </div>{" "}
        <div className={classes.spaceBetween}>
          <Text base400>Expected arrival</Text>{" "}
          <Text base0 className={classes.value}>
            8 network confirmations
          </Text>
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <Button base700 onClick={downloadQRCode} wFull>
          Save QR Image
        </Button>{" "}
        <Button onClick={() => {}} wFull>
          Share QR Image
        </Button>
      </div>
    </div>
  );
};

export default DepositAddress;
