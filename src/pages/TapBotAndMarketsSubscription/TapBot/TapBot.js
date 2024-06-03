import React from "react";
import classes from "./TapBot.module.css";
import { balanceIcon, coin, rocket } from "../../../images";
import { Text } from "../../../components/common";
import ProgressBar from "../../../components/common/ProgressBar/ProgressBar";

const Tap = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.balanceContainer}>
        <img src={coin} alt="#" className={classes.coin} />
        <Text xl4 semiBold base0>
          12,345
        </Text>
      </div>
      <div className={classes.infoContainer}>
        <div className={classes.steps}>
          <div className={classes.step}>
            <Text textCenter sm base400>
              Earn per tap
            </Text>
            <div className={classes.valueContainer}>
              <img src={coin} alt="#" className={classes.icon} />
              <Text base0>10+</Text>
            </div>
          </div>
          <div className={classes.step}>
            <Text textCenter sm base400>
              Next level
            </Text>
            <Text base0 textCenter>
              50,000
            </Text>
          </div>
          <div className={classes.step}>
            <Text textCenter sm base400>
              Profit per hour
            </Text>
            <div className={classes.valueContainer}>
              <img src={coin} alt="#" className={classes.icon} />
              <Text base0>0</Text>
            </div>
          </div>{" "}
        </div>

        <div className={classes.levelContainer}>
          <Text base100 semiBold>
            1/100
          </Text>
          <ProgressBar progress={50} />
          <div className={classes.level}>
            <Text base100>Level</Text>
            <Text base100 semiBold>
              1/100
            </Text>
          </div>
        </div>
      </div>

      <div className={classes.imgContainer}>
        <img src={rocket} alt="#" className={classes.img} />
      </div>

      <div className={classes.balanceContainer}>
        <img src={balanceIcon} alt="#" className={classes.balanceIcon} />
        <Text base0 base>
          0/10,000
        </Text>
      </div>
    </div>
  );
};

export default Tap;
