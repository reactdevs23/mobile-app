import React, { useState } from "react";

import classes from "./ImportToken.module.css";
import { Button, Modal, Text } from "../../components/common";

import { IoWarningOutline } from "react-icons/io5";
import Checkbox from "../../components/common/CheckBox/CheckBox";

const ImportToken = ({
  heading,

  selectedItem,
  setSelectedItem,
  onBack,
  isActive,
  onClose,
}) => {
  const [checked, setChecked] = useState(false);
  return (
    <Modal
      heading={heading}
      isActive={isActive}
      onClose={onClose}
      backButton
      onBack={onBack}
    >
      <div className={classes.warningWrappper}>
        <div className={classes.warningContainer}>
          <IoWarningOutline className={classes.warningIcon} />
          <Text base warningDefault>
            Anyone can create a [token name] token on Brandname with any name,
            including generating counterfeit versions of existing tokens and
            tokens that purport to represent projects without an actual token.
          </Text>{" "}
          <Text base warningDefault>
            If you acquire an arbitrary token, there’s a possibility that you
            won’t be able to resell it later.
          </Text>
        </div>
      </div>
      <div className={classes.tokenWrapper}>
        <div>
          <div className={classes.nameContainer}>
            <Text base0 lg>
              {selectedItem.name}{" "}
              <span className={classes.fullName}>{selectedItem.fullName}</span>
            </Text>
          </div>{" "}
          <div className={classes.addressContainer}>
            {" "}
            <Text>
              {"0x420b595d8b648971b3bfcf46e66544c384860536".slice(0, 15)}...
            </Text>
            <a
              href="#/"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              View on [web]
            </a>
          </div>
        </div>
        <Checkbox
          label="I understand"
          checked={checked}
          setChecked={setChecked}
        />
        <Button wFull onClick={() => {}}>
          Import Token
        </Button>
      </div>
    </Modal>
  );
};

export default ImportToken;
