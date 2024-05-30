import React from "react";
import classes from "./Tabs.module.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { navItem: "Swap Crypto", to: "/" },
    { navItem: "Airdrop", to: "/airdrop" },
    { navItem: "Referral", to: "/referral" },
  ];
  return (
    <div className={clsx(classes.tabs)}>
      {navItems.map((tab, i) => (
        <NavLink className={clsx(classes.tab)} key={i}>
          {tab}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
