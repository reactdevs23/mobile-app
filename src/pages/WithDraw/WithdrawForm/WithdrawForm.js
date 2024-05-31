import React, { useState } from "react";
import classes from "./WithdrawForm.module.css";
import Header from "../../Deposit/Header/Header";
import { Button, Text } from "../../../components/common";
import { scan } from "../../../images";
import Input from "../../../components/common/Input/Input";
import { FaAngleDown } from "react-icons/fa";
import { handleKeyDown } from "../../../hooks";
import WithdrawConfirmationModal from "../../../Modals/WithdrawConfirmationModal/WithdrawConfirmationModal";
const WithdrawForm = () => {
  const [address, setAddress] = useState("");
  const [memo, setMemo] = useState("");
  const [amount, setAmount] = useState(null);

  const [showWithdrawConfirmationModal, setShowWithdrawConfirmationModal] =
    useState(false);
  return (
    <>
      <div className={classes.wrapper}>
        <Header heading="Withdraw" />
        <div className={classes.infoContainer}>
          <div className={classes.addressContainer}>
            <Text base400> Address</Text>
            <div className={classes.box}>
              <Input
                noIcon
                className={classes.input}
                value={address}
                setValue={setAddress}
                placeholder="Press & hold to paste or scan qr"
              />
              <img src={scan} alt="#" className={classes.scanIcon} />
            </div>
          </div>
          <div className={classes.networkContainer}>
            <Text base400> Network</Text>
            <div className={classes.box}>
              <Text base base600>
                Select Network
              </Text>
              <FaAngleDown className={classes.arrow} />
            </div>
          </div>
          <div className={classes.memoContainer}>
            <Text base400> Memo</Text>
            <div className={classes.box}>
              <Input
                noIcon
                className={classes.input}
                value={memo}
                setValue={setMemo}
                placeholder="Press & hold to paste"
              />
            </div>
          </div>
          <div className={classes.amountContainer}>
            <Text base400> Enter Amount</Text>
            <div className={classes.box}>
              <Input
                noIcon
                className={classes.input}
                type="number"
                onKeyDown={handleKeyDown}
                value={amount}
                setValue={setAmount}
                placeholder="0.00"
              />
              <Text semiBold primaryDefault>
                Max.
              </Text>
            </div>
          </div>
        </div>
        <div className={classes.availableBalanceAndNetworkFee}>
          <div className={classes.availableBalance}>
            <Text base400>Available Balance</Text>{" "}
            <Text className={classes.value} base0>
              869.76 ETH
            </Text>
          </div>
          <div className={classes.networkFee}>
            <Text base400>Network Fee</Text>{" "}
            <Text base0 className={classes.value}>
              0.0010 ETH
            </Text>
          </div>
        </div>
        <div className={classes.receiveAmount}>
          <Text base400 textCenter>
            You will receive
          </Text>
          <Text base0 xl2 textCenter>
            64.976 <span className={classes.currency}>ETH</span>
          </Text>
        </div>
        <Button onClick={() => setShowWithdrawConfirmationModal(true)}>
          Withdraw
        </Button>
      </div>
      <WithdrawConfirmationModal
        isActive={showWithdrawConfirmationModal}
        onClose={() => setShowWithdrawConfirmationModal(false)}
      />
    </>
  );
};

export default WithdrawForm;
