import React, { useState } from "react";
import { GrFormCheckmark } from "react-icons/gr";
import { FiPlus } from "react-icons/fi";

import classes from "./SelectTokenModal.module.css";
import { Modal, Text } from "../../components/common";
import Input from "../../components/common/Input/Input";
import clsx from "clsx";
import Marquee from "react-fast-marquee";
import CustomTokenModal from "../CustomTokenModal/CustomTokenModal";
import ImportToken from "../ImportToken/ImportToken";

const SelectTokenModal = ({
  heading,
  items,
  selectedItem,
  setSelectedItem,
  isActive,
  onClose,
  setShowSelectTokenModal,

  //customToken
  showCustomTokenModal,
  setShowCustomTokenModal,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const [customToken, setCustomToken] = useState({
    logo: "",
    name: "",
    fullName: "",
    tokenAddress: "",
  });

  const [showImportTokenModal, setShowImportTokenModal] = useState(false);
  return (
    <>
      <Modal heading={heading} isActive={isActive} onClose={onClose}>
        <div className={classes.inputAndToken}>
          <Input
            value={searchValue}
            setValue={setSearchValue}
            placeholder="Search"
          />{" "}
          <Marquee autoFill={true} speed={40} pauseOnHover={true}>
            <div className={classes.allToken}>
              {items.map((token, i) => (
                <div
                  className={classes.token}
                  key={i}
                  onClick={() => {
                    setSelectedItem(token);
                    onClose();
                  }}
                >
                  <img src={token.logo} alt="#" className={classes.tokenLogo} />
                  <Text base base0>
                    {token.name}
                  </Text>
                </div>
              ))}
            </div>
          </Marquee>
        </div>

        <div className={clsx(classes.items)}>
          {filteredItems.map((item, i) => (
            <div
              onClick={() => {
                setSelectedItem(item);
                onClose();
              }}
              className={clsx(
                classes.item,
                selectedItem.name.toLowerCase() === item.name.toLowerCase() &&
                  classes.active
              )}
              key={i}
            >
              <img src={item.logo} alt="#" className={classes.logo} />
              <div className={classes.nameContainer}>
                <Text base300 lg>
                  {item.name}
                </Text>
                <Text base500 sm>
                  {item.fullName}
                </Text>
              </div>
              {selectedItem.name.toLowerCase() === item.name.toLowerCase() && (
                <GrFormCheckmark className={classes.checkmark} />
              )}
            </div>
          ))}
        </div>

        <div
          className={classes.customToken}
          onClick={() => {
            setShowCustomTokenModal(true);
            onClose();
          }}
        >
          <Text base base0 className={classes.customTextLabel}>
            Custom Token
          </Text>
          <FiPlus
            className={classes.plusIcon}
            onClick={() => {
              setShowCustomTokenModal(true);
              onClose();
            }}
          />
        </div>
      </Modal>
      <CustomTokenModal
        heading="Custom Token"
        isActive={showCustomTokenModal}
        onBack={() => {
          setShowCustomTokenModal(false);
          setShowSelectTokenModal(true);
        }}
        onClose={() => setShowCustomTokenModal(false)}
        items={items}
        selectedItem={customToken}
        setSelectedItem={setCustomToken}
        setShowImportTokenModal={setShowImportTokenModal}
      />
      <ImportToken
        heading="Import Token"
        isActive={showImportTokenModal}
        selectedItem={customToken}
        onClose={() => setShowImportTokenModal(false)}
        onBack={() => {
          setShowCustomTokenModal(true);
          setShowImportTokenModal(false);
        }}
      />
    </>
  );
};

export default SelectTokenModal;
