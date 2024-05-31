import React from "react";
import classes from "./SingleAirdrop.module.css";
import clsx from "clsx";
import { Text } from "../../../components/common";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleAirdrop = ({ logo, name, fullName, status, info }) => {
  return (
    <Link to="/airdrop-details" className={classes.wrapper}>
      <div className={classes.header}>
        <img src={logo} alt="#" className={classes.logo} />{" "}
        <div className={classes.nameContainer}>
          <Text base0 lg semiBold>
            {name}
          </Text>
          <Text sm base400>
            {name}
          </Text>
        </div>
        <Text
          className={clsx(
            classes.status,
            status.toLowerCase() === "ongoing" && classes.ongoing,
            status.toLowerCase() === "upcoming" && classes.upcoming,
            status.toLowerCase() === "cancelled" && classes.cancelled
          )}
        >
          {status}
        </Text>
      </div>{" "}
      <div className={classes.infoContainer}>
        {info.map((el, i) => (
          <div className={classes.spaceBetween} key={i}>
            <Text base500>{el.key}</Text>{" "}
            <Text base0 className={classes.value}>
              {el.value}
            </Text>
          </div>
        ))}
      </div>
      <FaAngleDown className={classes.downArrow} />
    </Link>
  );
};

export default SingleAirdrop;
