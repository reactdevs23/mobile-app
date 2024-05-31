import React from "react";
import { backArrow } from "../../../images";
import { useNavigate } from "react-router-dom";
import classes from "./Header.module.css";
import { Text } from "../../../components/common";
const Header = ({ heading }) => {
  const navigate = useNavigate();
  return (
    <div className={classes.header}>
      <img
        src={backArrow}
        alt="#"
        className={classes.backArrow}
        onClick={() => navigate(-1)}
      />
      <Text base base0 textCenter semiBold className={classes.heading}>
        {heading}
      </Text>{" "}
    </div>
  );
};

export default Header;
