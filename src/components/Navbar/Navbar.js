import React, { useEffect, useRef, useState } from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navbarRef = useRef(null);
  const [activeItem, setActiveItem] = useState(0);

  const navItems = [
    { navItem: "Swap Crypto", to: "/" },
    { navItem: "Airdrop", to: "/airdrop" },
    { navItem: "Referral", to: "/referral" },
  ];

  useEffect(() => {
    const navbar = navbarRef.current;
    const activeElement = navbar.children[activeItem];
    if (activeElement) {
      const containerWidth = navbar.parentElement.offsetWidth;
      const elementWidth = activeElement.offsetWidth;
      const elementLeft = activeElement.offsetLeft;
      const scrollPosition =
        elementLeft - containerWidth / 2 + elementWidth / 2;

      navbar.parentElement.scroll({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [activeItem]);
  const handleTouchStart = (e) => {
    const touchStart = e.touches[0].clientX;
    const handleTouchMove = (moveEvent) => {
      const touchEnd = moveEvent.touches[0].clientX;
      const delta = touchStart - touchEnd;
      navbarRef.current.parentElement.scrollLeft += delta;
      moveEvent.preventDefault();
    };
    const handleTouchEnd = () => {
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd);
  };
  return (
    <div className={classes.navbarContainer} onTouchStart={handleTouchStart}>
      <nav className={classes.navbar} ref={navbarRef}>
        {navItems.map((navItem, index) => (
          <NavLink
            to={navItem.to}
            key={index}
            className={`${classes.navItem} ${
              activeItem === index ? classes.active : ""
            }`}
            onClick={() => setActiveItem(index)}
          >
            {navItem.navItem}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
