import React, { useState } from "react";
import classes from "./TapBotAndMarketsSubscription.module.css";
import Header from "../../components/common/Header/Header";
import Tap from "./TapBot/TapBot";
import Markets from "./Markets/Markets";
import Tabs from "../../components/common/Tabs/Tabs";
import MySubscription from "./MySubscription/MySubscription";
const TapBotAndMarketsSubscription = () => {
  const tabs = ["Tap Bot", "Markets", "My Subscription"];
  const [selectedTab, setSelectedTab] = useState("Tap Bot");
  return (
    <div className={classes.wrapper}>
      <Header heading={selectedTab} />
      <Tabs
        tabs={tabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        type2
      />
      {selectedTab === "Tap Bot" && <Tap />}
      {selectedTab === "Markets" && <Markets />}
      {selectedTab === "My Subscription" && <MySubscription />}
    </div>
  );
};

export default TapBotAndMarketsSubscription;
