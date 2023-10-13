import React from "react";
import s from "./Dialog.module.css";

const Dialog = (props) => {
  return (
    <div className={s.dialog}>
      <p>{props.message}</p>
    </div>
  )
};

export default Dialog;
