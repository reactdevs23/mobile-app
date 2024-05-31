import React from "react";
import classes from "./ReferList.module.css";
import { Button, Text } from "../../../components/common";
import clsx from "clsx";

const ReferList = () => {
  const infos = [
    {
      label: "Invited",
      value: "986",
    },
    {
      label: "Joined",
      value: "154",
    },
    {
      label: "Swapped",
      value: "50",
    },
  ];

  const userInfo = [
    {
      userName: "username.123",
      earned: "41,845.8",
      status: ["Joined", "Swapped"],
    },
    {
      userName: "username.123",
      earned: "0",
      status: ["Pending"],
    },
    {
      userName: "username.123",
      earned: "0",
      status: ["Joined"],
    },
    {
      userName: "username.123",
      earned: "41,845.8",
      status: ["Joined", "Swapped"],
    },
  ];
  return (
    <div className={classes.wrapper}>
      <div className={classes.totalEarning}>
        <Text base400>Total Earning (USDT)</Text>
        <div className={classes.earnings}>
          <Text base0 base>
            $4,845.8
          </Text>
          <Button onClick={() => {}} className={classes.button}>
            Claim
          </Button>
        </div>
      </div>
      <div className={classes.infoContainer}>
        {infos.map((el, i) => (
          <div className={classes.infoBox} key={i}>
            <Text sm base400>
              {el.label}
            </Text>
            <Text base base0>
              {el.value}
            </Text>
          </div>
        ))}
      </div>

      <div className={clsx(classes.userInfo, "overflow")}>
        <Text
          sm
          base500
          className={clsx(classes.heading, classes.userNameHeading)}
        >
          User
        </Text>
        <Text sm base500 className={classes.heading}>
          Earned (USD)
        </Text>
        <Text
          sm
          base500
          className={clsx(classes.heading, classes.statusHeading)}
        >
          Status
        </Text>

        {userInfo.map((el, i) => (
          <React.Fragment key={i}>
            <Text base100 className={classes.name}>
              {el.userName}
            </Text>
            <Text base400 className={classes.earning}>
              {el.earned}
            </Text>
            <div className={classes.statusContainer}>
              {el.status.map((status, id) => (
                <Text
                  key={id}
                  className={clsx(
                    classes.status,
                    status.toLowerCase() === "joined" && classes.joined,
                    status.toLowerCase() === "swapped" && classes.swapped,
                    status.toLowerCase() === "pending" && classes.pending
                  )}
                >
                  {status}
                </Text>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ReferList;
