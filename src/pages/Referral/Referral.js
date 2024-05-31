import React, { useState } from "react";
import classes from "./Referral.module.css";

import Tabs from "../../components/common/Tabs/Tabs";
import ReferCode from "./ReferCode/ReferCode";
import ReferList from "./ReferList/ReferList";
const Referral = () => {
  const tabs = ["Refer Code", "Refer List"];
  const [selectedTab, setSelectedTab] = useState("Refer Code");
  return (
    <div className={classes.wrapper}>
      <Tabs
        tabs={tabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        type2
      />
      {selectedTab === "Refer Code" && <ReferCode />}
      {selectedTab === "Refer List" && <ReferList />}
    </div>
  );
};

export default Referral;
