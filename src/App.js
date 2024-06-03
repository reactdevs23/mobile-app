import React from "react";
import { Route, Routes } from "react-router-dom";
import Swap from "./pages/Swap/Swap";
import SwapSuccesfull from "./pages/SwapSuccesfull/SwapSuccesfull";
import Airdrop from "./pages/Airdrop/Airdrop";
import AirdropDetails from "./pages/AirdropDetails/AirdropDetails";
import AirdropSuccess from "./pages/AirdropSuccess/AirdropSuccess";
import Wallet from "./pages/Wallet/Wallet";

import SelectCoin from "./pages/Deposit/SelectCoin/SelectCoin";

import WithdrawSelectCoin from "./pages/WithDraw/SelectCoin/SelectCoin";
import SelectNetwork from "./pages/Deposit/SelectNetwork/SelectNetwork";
import DepositAddress from "./pages/Deposit/DepositAddress/DepositAddress";
import WithdrawForm from "./pages/WithDraw/WithdrawForm/WithdrawForm";
import WithdrawSuccess from "./pages/WithdrawSuccess/WithdrawSuccess";
import Referral from "./pages/Referral/Referral";
import MainLayout from "./Layout/MainLayout";
import classes from "./App.module.css";
import TapBotAndMarkets from "./pages/TapBotAndMarketsSubscription/TapBotAndMarketsSubscription";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      {/* <h1 className={classes.heading}>Please open in mobile</h1> */}
      <Navbar />
      <div className={classes.mainWrapper}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Swap />} />
            <Route path="/airdrop" element={<Airdrop />} />
            <Route path="/referral" element={<Referral />}></Route>
          </Route>
          <Route path="/swap-successfull" element={<SwapSuccesfull />} />
          <Route path="/airdrop-details" element={<AirdropDetails />} />
          <Route path="/airdrop-success" element={<AirdropSuccess />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/deposit/select-coin" element={<SelectCoin />} />
          <Route path="/deposit/select-network" element={<SelectNetwork />} />
          <Route path="/deposit/deposit-address" element={<DepositAddress />} />
          <Route
            path="/withdraw/select-coin"
            element={<WithdrawSelectCoin />}
          />
          <Route path="/withdraw/withdraw-from" element={<WithdrawForm />} />
          <Route
            path="/withdraw/withdraw-success"
            element={<WithdrawSuccess />}
          />{" "}
          <Route path="/tap" element={<TapBotAndMarkets />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
