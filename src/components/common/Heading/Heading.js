import clsx from "clsx";
import React from "react";
import classes from "./Heading.module.css";

const Heading = ({
  children,
  base0,
  base950,
  xl2,
  xl3,
  xl6,
  xl7,
  xl5,
  textCenter,
  semiBold,
  light,
  className,
}) => {
  return (
    <h3
      className={clsx(
        classes.heading,
        xl2 && classes.xl2,
        xl3 && classes.xl3,
        xl5 && classes.xl5,
        xl6 && classes.xl6,
        xl7 && classes.xl7,
        base0 && classes.base0,
        base950 && classes.base950,
        semiBold && classes.semiBold,
        light && classes.light,
        textCenter && classes.textCenter,
        className
      )}
    >
      {children}
    </h3>
  );
};

export default Heading;
