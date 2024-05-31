import React, { useState } from "react";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { TbSettings } from "react-icons/tb";

import Tabs from "../../components/common/Tabs/Tabs";
import SelectBox from "../../components/common/SelectBox/SelectBox";
import clsx from "clsx";
import { Text, Button } from "../../components/common";

import classes from "./Swap.module.css";
import SelectModal from "../../Modals/SelectModal/SelectModal";
import {
  Iinch,
  aave,
  arbitrum,
  aura,
  avalanche,
  badger,
  base,
  blast,
  bnb,
  bnbChain,
  celo,
  cowswap,
  eth,
  ethereum,
  jupiter,
  oneInch,
  optimism,
  orca,
  ox,
  polygon,
  sushi,
  uniswap,
} from "../../images";
import SelectTokenModal from "../../Modals/SelectTokenModal/SelectTokenModal";
import SwapConfirmationModal from "../../Modals/SwapConfirmationModal/SwapConfirmationModal";
const Swap = () => {
  const tabs = ["Swap", "Limit", "Send", "Buy"];
  const [selectedTab, setSelectedTab] = useState("Swap");
  const [payingAmount, setPayingAmount] = useState("");
  const [receivingAmount, setReceivingAmount] = useState("");

  //select blockchain
  const [selectedChain, setSelectedChain] = useState({
    logo: "",
    name: "",
  });
  const [showBlockChainModal, setShowBlockChainModal] = useState(false);
  const allChains = [
    { logo: arbitrum, name: "Arbitrum" },
    { logo: avalanche, name: "Avalanche" },
    { logo: base, name: "Base" },
    { logo: blast, name: "Blast" },
    { logo: bnbChain, name: "BNB Chain" },
    { logo: celo, name: "Celo" },
    { logo: ethereum, name: "Ethereum" },
    { logo: optimism, name: "Optimism" },
    { logo: polygon, name: "Polygon" },
  ];

  // select dex
  const [selectedDex, setSelectedDex] = useState({ logo: "", name: "" });
  const [showDexModal, setShowDexModal] = useState(false);
  const allDex = [
    { logo: ox, name: "0x" },
    { logo: jupiter, name: "Jupiter" },
    { logo: uniswap, name: "Uniswap" },
    { logo: cowswap, name: "CowSwap" },
    { logo: Iinch, name: "1inch" },
    { logo: orca, name: "Orca" },
    { logo: sushi, name: "Sushi" },
  ];

  // selectToken
  const [payingSelectedToken, setPayingSelectedToken] = useState({
    logo: "",
    name: "",
    fullName: "",
  });
  const [receivingSelectedToken, setReceivingSelectedToken] = useState({
    logo: "",
    name: "",
    fullName: "",
    tokenAddress: "",
  });
  const [showPayingTokenModal, setShowPayingTokenModal] = useState(false);
  const [showPayingCustomTokenModal, setShowPayingCustomTokenModal] =
    useState(false);
  const [showReceivingTokenModal, setShowReceivingTokenModal] = useState(false);
  const [showReceivingCustomTokenModal, setShowReceivingCustomTokenModal] =
    useState(false);

  const allToken = [
    {
      logo: eth,
      name: "ETH",
      fullName: "Ethereum",
      tokenAddress: "0x420b595d8b648971b3bfcf46e66544c384860536",
    },
    {
      logo: oneInch,
      name: "1INCH",
      fullName: "1INCH Token",
      tokenAddress: "0x420b595d8b648971b3bfcf46e66544c384860533",
    },
    {
      logo: aave,
      name: "AAVE",
      fullName: "AAVE Token",
      tokenAddress: "0x420b595d8b648971b3bfcf46e66544c384860534",
    },
    {
      logo: aura,
      name: "AURA",
      fullName: "Aura Finance",
      tokenAddress: "0x420b595d8b648971b3bfcf46e66544c384860535",
    },
    {
      logo: badger,
      name: "BADGER",
      fullName: "Badger Token",
      tokenAddress: "0x420b595d8b648971b3bfcf46e66544c384860535",
    },
    {
      logo: bnb,
      name: "BNB",
      fullName: "Binance Coin Network",
      tokenAddress: "0x420b595d8b648971b3bfcf46e66544c384860532",
    },
  ];

  // swap confirmatin modal

  const [showSwapConfirmationModal, setShowSwapConfirmationModal] =
    useState(false);
  // const [swap, setSwap] = useState(false);
  return (
    <>
      <div className={classes.container}>
        {" "}
        <Tabs
          tabs={tabs}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          type2
        />
        <div className={classes.selectBoxs}>
          <SelectBox
            label="Blockchain"
            onClick={() => setShowBlockChainModal(true)}
            selectedItem={selectedChain}
          />
          <SelectBox
            label="DEX"
            onClick={() => setShowDexModal(true)}
            selectedItem={selectedDex}
          />
        </div>
        <div className={clsx(classes.amountContainer)}>
          {/* paying token selection */}
          <div className={classes.payingAmount}>
            <SelectBox
              selectedItem={payingSelectedToken}
              onClick={() => setShowPayingTokenModal(true)}
              type2
              label="You're paying"
              amount={payingAmount}
              setAmount={setPayingAmount}
              balance={0}
              usdBalance={0}
              growth={0.15}
            />
            <div className={classes.swapWrapper} onClick={() => {}}>
              <div className={classes.arrowContainer}>
                <HiOutlineArrowsUpDown className={classes.arrow} />
              </div>
            </div>
          </div>
          {/* receiving token selection */}
          <SelectBox
            selectedItem={receivingSelectedToken}
            onClick={() => setShowReceivingTokenModal(true)}
            type2
            label="You will receive"
            amount={receivingAmount}
            setAmount={setReceivingAmount}
            balance={0}
            usdBalance={0}
            growth={0.15}
          />
        </div>
        <div className={classes.detailsContainer}>
          <div className={classes.infoContainer}>
            <div className={classes.spaceBetween}>
              <Text base300>Slippage Tolerance</Text>
              <Text base0>5%</Text>
            </div>{" "}
            <div className={classes.spaceBetween}>
              <Text base300>Transaction Deadline</Text>
              <Text base0>10 minute</Text>
            </div>
          </div>{" "}
          <button className={classes.settingsContainer}>
            <TbSettings className={classes.settingsIcon} />
          </button>
        </div>
        <Button
          wFull
          onClick={() => {
            setShowSwapConfirmationModal(true);
          }}
        >
          Swap
        </Button>
      </div>
      <SelectModal
        heading="Select Blockchain"
        isActive={showBlockChainModal}
        onClose={() => setShowBlockChainModal(false)}
        items={allChains}
        selectedItem={selectedChain}
        setSelectedItem={setSelectedChain}
      />
      <SelectModal
        heading="Select DEX"
        isActive={showDexModal}
        onClose={() => setShowDexModal(false)}
        items={allDex}
        selectedItem={selectedDex}
        setSelectedItem={setSelectedDex}
      />
      <SelectTokenModal
        heading="Select Token"
        isActive={showPayingTokenModal}
        onClose={() => setShowPayingTokenModal(false)}
        setShowSelectTokenModal={setShowPayingTokenModal}
        items={allToken}
        selectedItem={payingSelectedToken}
        setSelectedItem={setPayingSelectedToken}
        showCustomTokenModal={showPayingCustomTokenModal}
        setShowCustomTokenModal={setShowPayingCustomTokenModal}
      />{" "}
      <SelectTokenModal
        heading="Select Token"
        isActive={showReceivingTokenModal}
        onClose={() => setShowReceivingTokenModal(false)}
        setShowSelectTokenModal={setShowReceivingTokenModal}
        items={allToken}
        selectedItem={receivingSelectedToken}
        setSelectedItem={setReceivingSelectedToken}
        showCustomTokenModal={showReceivingCustomTokenModal}
        setShowCustomTokenModal={setShowReceivingCustomTokenModal}
      />
      <SwapConfirmationModal
        isActive={showSwapConfirmationModal}
        onClose={() => setShowSwapConfirmationModal(false)}
      />
    </>
  );
};

export default Swap;
