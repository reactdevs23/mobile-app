import React from "react";
import classes from "./AirdropSuccess.module.css";
import { backArrow, successImg } from "../../images";
import { Text } from "../../components/common";

import { useNavigate } from "react-router-dom";

const AirdropSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.wrapper}>
      <img
        src={backArrow}
        alt="#"
        className={classes.back}
        onClick={() => navigate(-1)}
      />
      <div className={classes.infoWrapper}>
        <img src={successImg} alt="#" className={classes.img} />

        <Text xl2 base0 font600 textCenter>
          Successful!
        </Text>
        <Text className={classes.info} textCenter>
          Congratulation! You have successfully performed the task of this
          airdrop. You got <span className={classes.bold}>80 points</span>.
        </Text>
      </div>
      <button onClick={() => navigate(-1)} className={classes.button}>
        Done
      </button>
    </div>
  );
};

export default AirdropSuccess;
