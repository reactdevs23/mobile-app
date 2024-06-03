import React, { useState } from "react";
import classes from "./MySubscription.module.css";
import { coin, coinLogo, placholer } from "../../../images";
import { Text } from "../../../components/common";
import SubscriptionModal from "../../../Modals/SubscriptionModal/SubscriptionModal";
import SubscriptionDetailsModal from "../../../Modals/SubscriptionDetailsModal/SubscriptionDetailsModal";

const MySubscription = () => {
  const [showSubscriptionDetailsModal, setShowSubscriptionDetailsModal] =
    useState(false);
  const mysubscriptions = [
    {
      img: placholer,
      title: "GameFi Tokens",
      profitPerHour: "50+",
      balance: "10K",
      level: 0,
    },
    {
      img: placholer,
      title: "GameFi Tokens",
      profitPerHour: "50+",
      balance: "10K",
      level: 0,
    },
    {
      img: placholer,
      title: "GameFi Tokens",
      profitPerHour: "50+",
      balance: "10K",
      level: 0,
    },
    {
      img: placholer,
      title: "GameFi Tokens",
      profitPerHour: "50+",
      balance: "10K",
      level: 0,
    },
    {
      img: placholer,
      title: "GameFi Tokens",
      profitPerHour: "50+",
      balance: "10K",
      level: 0,
    },
  ];
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.items}>
          {mysubscriptions.map((el, i) => (
            <div
              className={classes.item}
              key={i}
              onClick={() => setShowSubscriptionDetailsModal(true)}
            >
              <div className={classes.imgTitleAndProfit}>
                <img src={el.img} alt="#" className={classes.img} />
                <div className={classes.titleAndProfit}>
                  <Text base0 semiBold>
                    {el.title}
                  </Text>
                  <div className={classes.profitWrapper}>
                    <Text base400 sm>
                      Profit per hour
                    </Text>{" "}
                    <div className={classes.profitContainer}>
                      <img src={coin} alt="#" className={classes.coin} />{" "}
                      <Text base400 sm font600>
                        {el.profitPerHour}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className={classes.levelAndBalance}>
                <Text base400 semiBold className={classes.level}>
                  lvl {el.level}
                </Text>
                <div className={classes.balanceWrapper}>
                  {" "}
                  <img src={coinLogo} alt="#" className={classes.coin} />{" "}
                  <Text base400 sm font600>
                    {el.balance}
                  </Text>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SubscriptionDetailsModal
        isActive={showSubscriptionDetailsModal}
        onClose={() => setShowSubscriptionDetailsModal(false)}
      />
    </>
  );
};
export default MySubscription;
