import React, { useState } from "react";
import { GrFormCheckmark } from "react-icons/gr";

import classes from "./SelectModal.module.css";
import { Modal, Text } from "../../components/common";
import Input from "../../components/common/Input/Input";
import clsx from "clsx";

const SelectBlockChainModal = ({
  items,
  selectedItem,
  setSelectedItem,
  isActive,
  onClose,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Modal heading="Select Blockchain" isActive={isActive} onClose={onClose}>
      <div className={classes.inputWrapper}>
        <Input
          value={searchValue}
          setValue={setSearchValue}
          placeholder="Search"
        />
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
            <Text base300 lg>
              {item.name}
            </Text>
            {selectedItem.name.toLowerCase() === item.name.toLowerCase() && (
              <GrFormCheckmark className={classes.checkmark} />
            )}
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default SelectBlockChainModal;
