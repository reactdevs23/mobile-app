import React from "react";
import { backArrow } from "../../../images";
import { useNavigate } from "react-router-dom";
import classes from "./Header.module.css";
import Text from "../Text/Text";

const Header = ({ heading }) => {
  const navigate = useNavigate();
  return (
    <div className={classes.header}>
      <button onClick={() => navigate(-1)}>
        <img src={backArrow} alt="#" className={classes.backArrow} />
      </button>
      <Text base base0 textCenter semiBold className={classes.heading}>
        {heading}
      </Text>
    </div>
  );
};

export default Header;
