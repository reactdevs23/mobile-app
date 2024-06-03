import React, { useState } from "react";
import classes from "./SelectCoin.module.css";

import { Text, Header } from "../../../components/common";
import { RiDeleteBin6Line } from "react-icons/ri";

import clsx from "clsx";
import {
  arbitrum,
  avalanche,
  base,
  blast,
  bnbChain,
  celo,
  ethereum,
  optimism,
  polygon,
} from "../../../images";
import Input from "../../../components/common/Input/Input";
import Marquee from "react-fast-marquee";

const SelectCoin = () => {
  const [searchValue, setSearchValue] = useState("");

  const [searchHistory, setSearchHistory] = useState([
    "USDT",
    "BTC",
    "ORDI",
    "LINK",
  ]);
  const allCoins = [
    { logo: arbitrum, name: "Arbitrum", price: "$41,598.23" },
    { logo: avalanche, name: "Avalanche", price: "$41,598.23" },
    { logo: base, name: "Base", price: "$41,598.23" },
    { logo: blast, name: "Blast", price: "$41,598.23" },
    { logo: bnbChain, name: "BNB Chain", price: "$41,598.23" },
    { logo: celo, name: "Celo", price: "$41,598.23" },
    { logo: ethereum, name: "Ethereum", price: "$41,598.23" },
    { logo: optimism, name: "Optimism", price: "$41,598.23" },
    { logo: polygon, name: "Polygon", price: "$41,598.23" },
  ];
  const filteredItems = allCoins.filter((coin) =>
    coin.name.toLocaleLowerCase().includes(searchValue)
  );
  return (
    <div className={classes.wrapper}>
      <Header heading="Deposit" />
      <Input
        base950
        value={searchValue}
        setValue={setSearchValue}
        placeholder="Search Coin"
      />
      {searchHistory.length > 0 && (
        <div className={classes.searchHistory}>
          <div className={classes.searchHistoryHeader}>
            <Text base100>Search History</Text>
            <RiDeleteBin6Line
              className={classes.deleteIcon}
              onClick={() => setSearchHistory([])}
            />
          </div>
          <div className={classes.histories}>
            {searchHistory.map((history, i) => (
              <button
                className={classes.history}
                key={i}
                onClick={() => setSearchValue(history)}
              >
                {history}
              </button>
            ))}
          </div>
        </div>
      )}
      <div className={classes.trendingContainer}>
        <Text base100>Trending</Text>
        <Marquee autoFill={true} speed={40} pauseOnHover={true}>
          <div className={classes.allCoin}>
            {allCoins.map((coin, i) => (
              <div className={classes.coin} key={i} onClick={() => {}}>
                <img src={coin.logo} alt="#" className={classes.coinLogo} />
                <Text base400>{coin.name}</Text>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
      <div className={classes.coinsContainer}>
        <Text base base0>
          Coin List
        </Text>
        <div className={classes.coins}>
          {filteredItems.map((coin, i) => (
            <div onClick={() => {}} className={clsx(classes.item)} key={i}>
              <img src={coin.logo} alt="#" className={classes.logo} />
              <Text base base0>
                {coin.name}
              </Text>
              <Text base500 className={classes.price}>
                {coin.price}
              </Text>{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectCoin;
