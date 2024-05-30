import React from "react";
import classes from "./Text.module.css";
import clsx from "clsx";
const Text = ({
  children,
  base,
  sm,
  lg,
  xl,
  xl2,
  xl3,
  primaryDefault,
  base0,
  base300,
  base400,
  base500,
  base600,
  base800,
  base950,
  semiBold,
  bold,
  textCenter,
  textRight,
  className,
}) => {
  return (
    <p
      className={clsx(
        classes.text,
        primaryDefault && classes.primaryDefault,
        base0 && classes.base0,
        base300 && classes.base300,
        base400 && classes.base400,
        base500 && classes.base500,
        base600 && classes.base600,
        base800 && classes.base800,
        base950 && classes.base950,

        sm && classes.sm,
        base && classes.base,
        lg && classes.lg,
        xl && classes.xl,
        xl2 && classes.xl2,
        xl3 && classes.xl3,
        bold && classes.bold,
        semiBold && classes.semiBold,
        textCenter && classes.textCenter,
        textRight && classes.textRight,
        className
      )}
    >
      {children}
    </p>
  );
};

export default Text;
