import React from "react";
import classes from "./Navbar.module.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { navItem: "Swap Crypto", to: "/" },
    { navItem: "Airdrop", to: "/airdrop" },
    { navItem: "Referral", to: "/referral" },
  ];
  return (
    <div className={clsx(classes.navItems)}>
      {navItems.map((navItem, i) => (
        <NavLink
          to={navItem.to}
          className={({ isActive }) =>
            isActive
              ? clsx(classes.navItem, classes.activeNavItem)
              : classes.navItem
          }
          key={i}
        >
          {navItem.navItem}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
