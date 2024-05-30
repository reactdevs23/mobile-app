import React, { useState } from "react";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { TbSettings } from "react-icons/tb";
import classes from "./Home.module.css";
import TopBar from "../../components/TopBar/TopBar";
import Tabs from "../../components/common/Tabs/Tabs";
import SelectBox from "../../components/common/SelectBox/SelectBox";
import clsx from "clsx";
import { Text, Button } from "../../components/common";
import Navbar from "../../components/Navbar/Tabs";

const Home = () => {
  const tabs = ["Swap", "Limit", "Send", "Buy"];
  const [selectedTab, setSelectedTab] = useState("Swap");

  const [payingAmount, setPayingAmount] = useState(null);
  const [receivingAmount, setReceivingAmount] = useState(null);

  const [swap, setSwap] = useState(false);
  return (
    <>
      <TopBar />
      <Navbar />
      <div className={classes.container}>
        {" "}
        <Tabs
          tabs={tabs}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          type2
        />
        <SelectBox label="Blockchain" />
        <SelectBox label="DEX" />
        <div
          className={clsx(
            classes.amountContainer,
            swap && classes.swapAmountContainer
          )}
        >
          <div className={classes.payingAmount}>
            <SelectBox
              type2
              label="You're paying"
              amount={payingAmount}
              setAmount={setPayingAmount}
              balance={0}
            />
            <div className={classes.swapWrapper}>
              <div className={classes.arrowContainer}>
                <HiOutlineArrowsUpDown className={classes.arrow} />
              </div>
            </div>
          </div>
          <SelectBox
            type2
            label="You will receive"
            amount={receivingAmount}
            setAmount={setReceivingAmount}
            balance={0}
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
              <Text base0>10 minute%</Text>
            </div>
          </div>{" "}
          <button className={classes.settingsContainer}>
            <TbSettings className={classes.settingsIcon} />
          </button>
        </div>
        <Button wFull onClick={() => {}}>
          Swap
        </Button>
      </div>
    </>
  );
};

export default Home;
