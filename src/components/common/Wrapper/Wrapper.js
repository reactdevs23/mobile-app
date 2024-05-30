import React from "react";
import classes from "./Wrapper.module.css";
import clsx from "clsx";

const Wrapper = ({ children, className, bg }) => {
  return (
    <section
      className={clsx(classes.wrapper, className)}
      style={{ background: bg }}
    >
      {children}
    </section>
  );
};

export default Wrapper;
