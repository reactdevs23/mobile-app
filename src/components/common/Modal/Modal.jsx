import classes from "./Modal.module.css";
import { AiOutlineClose } from "react-icons/ai";

import clsx from "clsx";

const Modal = ({
  noCross,
  isActive,
  onClose,
  className,
  children,
  ...rest
}) => {
  return (
    <>
      {isActive && (
        <div
          className={clsx(isActive && classes.active, classes.modalOverlay)}
          onClick={onClose}
        />
      )}
      <div
        className={clsx(
          className,
          isActive && classes.active,

          classes.modal
        )}
        {...rest}
      >
        {!noCross && (
          <div onClick={onClose} className={classes.close}>
            <AiOutlineClose className={className.closeIcon} />
          </div>
        )}
        {children}
      </div>
    </>
  );
};

export default Modal;
