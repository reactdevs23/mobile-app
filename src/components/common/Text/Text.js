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
  xl4,
  primaryDefault,
  warningDefault,
  base0,
  base100,
  base300,
  base400,
  base500,
  base600,
  base800,
  base950,
  semiBold,
  bold,
  font600,
  textCenter,
  textRight,
  className,
}) => {
  return (
    <p
      className={clsx(
        classes.text,
        primaryDefault && classes.primaryDefault,
        warningDefault && classes.warningDefault,

        base0 && classes.base0,
        base100 && classes.base100,
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
        xl4 && classes.xl4,
        bold && classes.bold,
        font600 && classes.font600,
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
