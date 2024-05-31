import React, { useState } from "react";
import classes from "./Airdrop.module.css";
import Tabs from "../../components/common/Tabs/Tabs";

import { ethw } from "../../images";
import SingleAirdrop from "./SingleAirdrop/SingleAirdrop";

const Airdrop = () => {
  const tabs = ["All Airdrop", "My Airdrop"];
  const [selectedTab, setSelectedTab] = useState("All Airdrop");

  const allAirdrops = [
    {
      logo: ethw,
      name: "ETHW",
      fullName: "Ethereum PoW",
      status: "Ongoing",
      info: [
        {
          key: "Token",
          value: "XCASH",
        },
        {
          key: "Participants",
          value: "1,694",
        },
        {
          key: "Starts In",
          value: "2024/05/22 03:00 ",
        },
        {
          key: "Ends",
          value: "2024/06/03 03:00 GMT+06:00",
        },
      ],
    },
    {
      logo: ethw,
      name: "ETHW",
      fullName: "Ethereum PoW",
      status: "upcoming",
      info: [
        {
          key: "Token",
          value: "XCASH",
        },
        {
          key: "Participants",
          value: "1,694",
        },
        {
          key: "Starts In",
          value: "2024/05/22 03:00 ",
        },
        {
          key: "Ends",
          value: "2024/06/03 03:00 GMT+06:00",
        },
      ],
    },
    {
      logo: ethw,
      name: "ETHW",
      fullName: "Ethereum PoW",
      status: "Cancelled",
      info: [
        {
          key: "Token",
          value: "XCASH",
        },
        {
          key: "Participants",
          value: "1,694",
        },
        {
          key: "Starts In",
          value: "2024/05/22 03:00 ",
        },
        {
          key: "Ends",
          value: "2024/06/03 03:00 GMT+06:00",
        },
      ],
    },
  ];
  return (
    <>
      <section className={classes.wrapper}>
        <Tabs
          tabs={tabs}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          type2
        />
        <div className={classes.allAirdrops}>
          {allAirdrops.map((airdrop, i) => (
            <SingleAirdrop {...airdrop} key={i} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Airdrop;
