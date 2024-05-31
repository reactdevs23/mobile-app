import React from "react";
import classes from "./WithdrawSuccess.module.css";
import { backArrow, successImg } from "../../images";
import { Text } from "../../components/common";
import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";

const WithdrawSuccess = () => {
  const navigate = useNavigate();
  const transactionDetails = [
    {
      key: "Trx. ID",
      value: "ABC12345678",
    },
    {
      key: "Date & Time",
      value: "05-24-2024 15:36:29",
    },
    {
      key: "You withdrawn",
      value: "0.0036978 ETH",
    },
    {
      key: "Network",
      value: "Ethereum (ERC20)",
    },
    {
      key: "Platform Fees",
      value: "1.00 USDT",
    },

    {
      key: "Status",
      value: "Completed",
    },
  ];
  return (
    <div className={classes.wrapper}>
      <img
        src={backArrow}
        alt="#"
        className={classes.back}
        onClick={() => navigate(-1)}
      />
      <div className={classes.imgAndTitle}>
        <img src={successImg} alt="#" className={classes.img} />

        <Text xl2 base0 font600 textCenter>
          Successful!
        </Text>
      </div>
      <div className={classes.detailsContainer}>
        <Text base400>Transaction Details</Text>

        <div className={classes.details}>
          {transactionDetails.map((el, i) => (
            <div className={classes.spaceBetween}>
              <Text base300 className={classes.key}>
                {el.key}
              </Text>
              <Text
                base0
                semiBold
                className={clsx(
                  classes.value,
                  el.value.toLowerCase() === "completed" && classes.completed
                )}
              >
                {el.value}
              </Text>
            </div>
          ))}
        </div>
      </div>

      <Link to="/" className={classes.button}>
        Done
      </Link>
    </div>
  );
};

export default WithdrawSuccess;
