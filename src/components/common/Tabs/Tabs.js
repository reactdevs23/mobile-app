import React from "react";
import classes from "./Tabs.module.css";
import clsx from "clsx";

const Tabs = ({ tabs, selectedTab, setSelectedTab, type2, type3 }) => {
  return (
    <div
      className={clsx(
        classes.tabs,
        type2 && classes.type2,
        type3 && classes.type3
      )}
      style={{ gridTemplateColumns: `repeat(${tabs.length}, 1fr)` }}
    >
      {tabs.map((tab, i) => (
        <button
          onClick={() => setSelectedTab(tab)}
          className={clsx(
            classes.tab,
            tab.toLowerCase() === selectedTab.toLowerCase() && classes.activeTab
          )}
          key={i}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
