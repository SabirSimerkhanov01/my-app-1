import React from "react";
import Contacts from "./Contacts/Contacts";
import Dialogs from "./Dialogs/Dialogs";
import s from "./Messages.module.css";
import { changeValueMessage, addMessage } from "../../Redux/messagesReducer";

const renderDialog = (data) =>
  data.map((el) => <Dialogs id={el.id} message={el.message} />);

const renderContacts = (data) =>
  data.map((el) => <Contacts img={el.img} id={el.id} name={el.name} />);

const Messages = (props) => {
  const { messagesWindow } = props;

  const dialogData = renderDialog(messagesWindow.dialogs);
  const contactsData = renderContacts(messagesWindow.contacts);

  const newMessage = React.createRef();

  const changeMessage = () => {
    const text = newMessage.current.value;

    props.dispatch(changeValueMessage(text));
  };

  const addMessages = () => {
    props.dispatch(addMessage());
  };

  return (
    <div className={s.messages}>
      <div className={s.contacts}>
        <h1 className={s.title}>Contacts</h1>
        {contactsData}
      </div>

      <div className={s.dialogs}>
        <h1 className={s.title}>Dialogs</h1>

        <div className={s.dialogsInner}>{dialogData}</div>

        <div>
          <textarea
            ref={newMessage}
            onChange={changeMessage}
            value={messagesWindow.valueMessage}
            placeholder="write here!"
          ></textarea>
          <button onClick={addMessages}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
