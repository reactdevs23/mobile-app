import React, { useState } from "react";
import classes from "./TransactionSettingModal.module.css";
import { Modal, Text } from "../../components/common";
import Tabs from "../../components/common/Tabs/Tabs";
import { handleKeyDown } from "../../hooks";

const TransactionSettingsModal = ({ isActive, onClose }) => {
  const [selectedTab, setSelectedTab] = useState("Auto");
  const tabs = ["Auto", "Custom"];
  const [tollerance, setTollerance] = useState("");
  const [deadLine, setDeadLine] = useState("");
  return (
    <Modal heading="Transaction Settings" isActive={isActive} onClose={onClose}>
      <div className={classes.tolleranceAndDeadLine}>
        <div className={classes.tollerance}>
          <Text base base300 semiBold>
            Slippage tolerance
          </Text>
          <div className={classes.tabsAndTollerance}>
            <Tabs
              tabs={tabs}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              type2
            />
            <div className={classes.inputcontainer}>
              <input
                type="number"
                onKeyDown={handleKeyDown}
                inputMode="numeric"
                placeholder="0"
                value={tollerance}
                onChange={(e) => setTollerance(+e.target.value)}
                className={classes.input}
              />
              <Text base base0>
                %
              </Text>
            </div>
          </div>
        </div>{" "}
        <div className={classes.deadLine}>
          <Text base base300 semiBold>
            Swap deadline
          </Text>

          <div className={classes.inputcontainer}>
            <input
              type="number"
              onKeyDown={handleKeyDown}
              inputMode="numeric"
              placeholder="0"
              value={deadLine}
              onChange={(e) => setDeadLine(+e.target.value)}
              className={classes.input}
            />
            <Text base base0>
              minutes
            </Text>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TransactionSettingsModal;
