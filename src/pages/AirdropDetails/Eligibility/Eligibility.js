import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { IoWarningOutline } from "react-icons/io5";
import classes from "./Eligibility.module.css";
import { Text } from "../../../components/common";
const Eligibility = () => {
  const eligibilities = [
    "Lorem ipsum dolor sit amet",
    "Consectetur adipiscing elit",
    "Sed do eiusmod tempor incididunt",
    "Ut labore et dolore magna aliqua",
  ];
  return (
    <div className={classes.wrapper}>
      <Text base0 base>
        My Eligibility
      </Text>

      <div className={classes.steps}>
        {eligibilities.map((step, i) => (
          <div className={classes.step} key={i}>
            <FaCircleCheck className={classes.checkmark} />
            {"  "}
            <Text base500 className={classes.id}>
              {step}
            </Text>
          </div>
        ))}
      </div>
      <div className={classes.warningContainer}>
        <IoWarningOutline className={classes.warningIcon} />
        <Text primaryDefault>
          Complete the tasks to claim your reward points.
        </Text>
      </div>
    </div>
  );
};

export default Eligibility;
