import React, { useState } from "react";
import classes from "./SelectNetwork.module.css";

import { Text } from "../../../components/common";

import { FaAngleRight } from "react-icons/fa6";

import clsx from "clsx";

import Input from "../../../components/common/Input/Input";
import Header from "../Header/Header";

const SelectNetwork = () => {
  const [searchValue, setSearchValue] = useState("");

  const allNetworks = [
    { name: "BNB Smar Chain (BEP20)" },
    { name: "EOS" },
    { name: "AVAX C-Chain" },
    { name: "BNB Beacon Chain (BEP2)" },
    { name: "Ethereum (ERC20)" },
    { name: "Polygon" },
    { name: "Solana" },
    { name: "Tezos" },
    { name: "Tron (TRC20)" },
  ];
  const filteredItems = allNetworks.filter((network) =>
    network.name.toLocaleLowerCase().includes(searchValue)
  );
  return (
    <div className={classes.wrapper}>
      <Header heading="Deposit" />
      <Input
        base950
        value={searchValue}
        setValue={setSearchValue}
        placeholder="Search Network"
      />
      <div className={classes.warningContainer}>
        <Text warningDefault>
          Please note that only supported networks on [app] platform are
          displayed. Depositing via another network may result in loss of
          assets.
        </Text>
      </div>

      <div className={classes.networks}>
        {filteredItems.map((network, i) => (
          <div onClick={() => {}} className={clsx(classes.item)} key={i}>
            <Text base base0>
              {network.name}
            </Text>
            <FaAngleRight className={classes.rightArrow} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectNetwork;
