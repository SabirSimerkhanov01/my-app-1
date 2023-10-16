import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={s.dialog}>
      <p className={s.left}>{props.message}</p>
    </div>
  );
};

export default Dialogs;
