const CHANGE_VALUE_MESSAGE = "CHANGE-VALUE-POST";
const ADD_MESSAGE = "ADD-MESSAGE";

const messagesReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      state.dialogs.push({
        id: 2,
        message: state.valueMessage,
      });
      state.valueMessage = "";
      return state;
    case CHANGE_VALUE_MESSAGE:
      state.valueMessage = action.text;
      return state;
    default:
      return state;
  }
};

export const changeValueMessage = (text) => ({
  type: CHANGE_VALUE_MESSAGE,
  text: text,
});

export const addMessage = () => ({
  type: ADD_MESSAGE,
});

export default messagesReducer;
