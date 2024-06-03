import React, { useState } from "react";
import classes from "./AirdropDetails.module.css";
import {
  backArrow,
  ethw,
  moreParticipant,
  participant,
  participant2,
  participant3,
  participant4,
} from "../../images";
import { Text } from "../../components/common";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import Tabs from "../../components/common/Tabs/Tabs";
import Details from "./Details/Details";
import Eligibility from "./Eligibility/Eligibility";
import Tasks from "./Tasks/Tasks";
const AirdropDetails = ({ status = "Ongoing" }) => {
  const tabs = ["Details", "Eligibility", "Tasks"];
  const [selectedTab, setSelectedTab] = useState("Details");
  const navigate = useNavigate();
  const participants = [
    participant,
    participant2,
    participant3,
    participant4,
    moreParticipant,
  ];
  const tasks = [
    {
      title: "Visit the airdrop questing",
      info: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      status: "Completed",
    },
    {
      title: "Have the Legend role in Airdrop Discord Server",
      info: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      status: "Completed",
    },
    {
      title: "Visit the airdrop questing",
      info: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      status: "Completed",
    },
    {
      title: "Have the Legend role in Airdrop Discord Server",
      info: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..",
      status: "",
    },
  ];
  const allTasksCompleted = tasks.every(
    (task) => task.status.toLowerCase() === "completed"
  );

  return (
    <section className={classes.wrapper}>
      <button onClick={() => navigate(-1)}>
        <img src={backArrow} alt="#" className={classes.backArrow} />
      </button>
      <div className={classes.header}>
        <img src={ethw} alt="#" className={classes.logo} />
        <div className={classes.infoContainer}>
          <div className={classes.nameContainer}>
            <Text base0 lg semiBold>
              Airdrop title here
            </Text>
            <div className={classes.fullNameAndStatus}>
              <Text sm base400 className={classes.fullName}>
                Ethereum PoW
              </Text>
              <Text
                className={clsx(
                  classes.status,
                  status.toLowerCase() === "ongoing" && classes.ongoing,
                  status.toLowerCase() === "upcoming" && classes.upcoming,
                  status.toLowerCase() === "cancelled" && classes.cancelled
                )}
              >
                {status}
              </Text>
            </div>
          </div>
          <div className={classes.participantContainer}>
            <div className={classes.participants}>
              {participants.map((el, i) => (
                <img
                  src={el}
                  key={i}
                  className={classes.participant}
                  alt="#"
                  style={{ marginLeft: i === 0 ? 0 : `${-12}px` }}
                />
              ))}
            </div>
            <Text base500>1,694 participants</Text>
          </div>
          <Text base500>2024/05/22 03:00 - 2024/06/03 03:00 GMT+06:00</Text>
        </div>
      </div>
      <Tabs
        tabs={tabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        type3
      />
      <div className={classes.detailsContainer}>
        {selectedTab.toLowerCase() === "details" && <Details />}{" "}
        {selectedTab.toLowerCase() === "eligibility" && <Eligibility />}
        {selectedTab.toLowerCase() === "tasks" && <Tasks tasks={tasks} />}
      </div>
      <div className={classes.rewards}>
        <img src={ethw} alt="#" className={classes.rewardImg} />

        <div className={classes.nameContainer}>
          <Text base500 sm>
            Rewards
          </Text>{" "}
          <Text base0 base className={classes.point}>
            80 Points
          </Text>
        </div>

        {allTasksCompleted ? (
          <button className={classes.claimButton}>Claim Points</button>
        ) : (
          <button className={classes.button}>Task Incomplete</button>
        )}
      </div>
    </section>
  );
};

export default AirdropDetails;
