import React from "react";
import { Text } from "../../common";
import classes from "./SelectBox.module.css";
import { FaAngleDown } from "react-icons/fa";

const SelectBox = ({
  label,
  onClick,
  selected,
  type2,
  amount,
  setAmount,
  balance,
}) => {
  const handleKeyDown = (event) => {
    if (
      !(
        /[0-9]/.test(event.key) ||
        event.key === "Backspace" ||
        event.key === "ArrowUp" ||
        event.key === "ArrowDown"
      )
    ) {
      event.preventDefault();
    }
  };
  return (
    <>
      {type2 ? (
        <div className={classes.wrapper} onClick={onClick}>
          <Text sm>{label}</Text>
          <div className={classes.selectContainer}>
            <input
              type="number"
              onKeyDown={handleKeyDown}
              inputmode="numeric"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(+e.target.value)}
              className={classes.input}
            />
            <div className={classes.selectBox}>
              <Text
                semiBold
                base
                primaryDefault
                className={classes.selectTokenText}
              >
                Select Token
              </Text>
              <FaAngleDown className={classes.arrow} />
            </div>
          </div>
          <div className={classes.balanceContainer}>
            <Text>
              Balance: <span className={classes.balance}>{balance}</span>{" "}
            </Text>
          </div>
        </div>
      ) : (
        <div className={classes.wrapper} onClick={onClick}>
          <Text sm>{label}</Text>
          <div className={classes.selectContainer}>
            <Text base base600>
              Select
            </Text>
            <FaAngleDown className={classes.arrow} />
          </div>
        </div>
      )}
    </>
  );
};

export default SelectBox;
