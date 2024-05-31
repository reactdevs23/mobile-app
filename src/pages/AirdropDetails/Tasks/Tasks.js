import React from "react";
import classes from "./Tasks.module.css";
import { Text } from "../../../components/common";
import { pasteIcon } from "../../../images";
import { FaCircleCheck } from "react-icons/fa6";

const Tasks = ({ tasks }) => {
  return (
    <div className={classes.wrapper}>
      <Text base0 base font600>
        Perform Tasks First
      </Text>

      <div className={classes.tasks}>
        {tasks.map((task, i) => (
          <div className={classes.task} key={i}>
            <div className={classes.header}>
              <Text base0 base semiBold>
                {task.title}
              </Text>

              {task.status.toLowerCase() === "completed" ? (
                <FaCircleCheck className={classes.checkmark} />
              ) : (
                <img src={pasteIcon} alt="#" className={classes.icon} />
              )}
            </div>{" "}
            <Text base500>{task.info}</Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
