import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Contacts.module.css";

const Contact = (props) => {
  const path = `/messages/${props.id}`;
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive ? s.active + " " + s.contact : s.contact
      }
    >
      <img
        src={props.img}
        style={{ height: 25, width: 25, marginLeft: 8, marginTop: 2 }}
        alt="avatar"
      />
      <h3>{props.name}</h3>
    </NavLink>
  );
};

export default Contact;
