import React from "react";
import s from "./LeftBar.module.css";
import { NavLink } from "react-router-dom";
import tv from '../../imgs/tv.svg';
import medal from '../../imgs/medal.svg';
import message2 from '../../imgs/message2.svg';
import human from '../../imgs/human.svg';

const LeftBar = () => {
  return (
    <div className={s.leftBar}>
      <div className={s.newFeeds}>
        <h2 className={s.title}>New Feeds</h2>

        <div className={s.newFeed}>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? s.active : "")}
          >
            <div className={s.backOfIcon + " " + s.blue2}>
              <img src={human} alt="human" style={{ height: 25, width: 25 }} />
            </div>
            Profile
          </NavLink>
        </div>

        <div className={s.newFeed}>
          <NavLink
            to="/newsfeed"
            className={({ isActive }) => (isActive ? s.active : "")}
          >
            <div className={s.backOfIcon + " " + s.blue}>
              <img src={tv} alt="tv" style={{ height: 25, width: 25 }} />
            </div>
            Newsfeed
          </NavLink>
        </div>

        <div className={s.newFeed}>
          <NavLink
            to="/friends"
            className={({ isActive }) => (isActive ? s.active : "")}
          >
            <div className={s.backOfIcon + " " + s.red}>
              <img src={medal} alt="medal" style={{ height: 25, width: 25 }} />
            </div>
            Friends
          </NavLink>
        </div>

        <div className={s.newFeed}>
          <NavLink
            to="/messages"
            className={({ isActive }) => (isActive ? s.active : "")}
          >
            <div className={s.backOfIcon + " " + s.yellow}>
              <img src={message2} alt="medal" style={{ height: 25, width: 25 }} />
            </div>
            Messages
          </NavLink>
        </div>

      </div>
    </div>
  );
};

export default LeftBar;
