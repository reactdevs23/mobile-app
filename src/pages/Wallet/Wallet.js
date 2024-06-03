import React from "react";
import classes from "./Wallet.module.css";

import { Button, Header, Text } from "../../components/common";
import { aave, aura, badger, bnb, eth, oneInch } from "../../images";
import clsx from "clsx";
const Wallet = () => {
  const myAssets = [
    {
      logo: eth,
      name: "ETH",
      fullName: "Ethereum",
      price: 9.99,
      usdPrice: 8.85,
    },
    {
      logo: oneInch,
      name: "1INCH",
      fullName: "1INCH Token",
      price: 0.0,
      usdPrice: 0.0,
    },
    {
      logo: aave,
      name: "AAVE",
      fullName: "AAVE Token",
      price: 0.0,
      usdPrice: 0.0,
    },
    {
      logo: aura,
      name: "AURA",
      fullName: "Aura Finance",
      price: 0.0,
      usdPrice: 0.0,
    },
    {
      logo: badger,
      name: "BADGER",
      fullName: "Badger Token",
      price: 0.0,
      usdPrice: 0.0,
    },
    {
      logo: bnb,
      name: "BNB",
      fullName: "Binance Coin Network",
      price: 0.0,
      usdPrice: 0.0,
    },
  ];
  return (
    <div className={classes.wrapper}>
      <Header heading="Wallet" />
      <Text textCenter base500 sm>
        Total Balance (BTC)
      </Text>
      <div className={classes.balanceContainer}>
        <Text xl3 base0 semiBold className={classes.balance}>
          1.34859762
        </Text>
        <Text base500 className={classes.usdBalance}>
          ≈ $330659.06
        </Text>
      </div>
      <div className={classes.buttonContainer}>
        <Button to="/deposit" base700>
          Deposit
        </Button>{" "}
        <Button to="/withdraw" base700>
          Withdraw
        </Button>
      </div>
      <div className={classes.assetsContainer}>
        <Text base base0>
          My Assets
        </Text>
        <div className={classes.assets}>
          {myAssets.map((asset, i) => (
            <div onClick={() => {}} className={clsx(classes.item)} key={i}>
              <img src={asset.logo} alt="#" className={classes.logo} />
              <div className={classes.nameContainer}>
                <Text base base0>
                  {asset.name}
                </Text>
                <Text base500 sm>
                  {asset.fullName}
                </Text>
              </div>
              <div className={classes.priceContainer}>
                <Text base base0>
                  {asset.price.toFixed(2)}
                </Text>{" "}
                <Text sm base500>
                  ${asset.usdPrice.toFixed(2)}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wallet;
