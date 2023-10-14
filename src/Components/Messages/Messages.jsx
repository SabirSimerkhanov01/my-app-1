import React from "react";
import Contacts from "./Contacts/Contacts";
import Dialogs from './Dialogs/Dialogs';
import s from "./Messages.module.css";

const renderDialog = (data) => data.map( el => <Dialogs message={el.message} /> );

const renderContacts = (data) => data.map( el => <Contacts img={el.img} id={el.id} name={el.name} /> )

const Messages = (props) => {
  const dialogData = renderDialog(props.dialogs);
  const contactsData = renderContacts(props.contacts);

  return (
    <div className={s.messages}>
      <div className={s.contacts}>
        <h1 className={s.title}>Contacts</h1>
        { contactsData }
      </div>

      <div className={s.dialogs}>
        <h1 className={s.title}>Dialogs</h1>
        { dialogData }
      </div>
    </div>
  );
};

export default Messages;
