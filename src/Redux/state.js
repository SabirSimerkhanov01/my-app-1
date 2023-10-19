import Alexey from "../imgs/Marat.jpg";
import Yulia from "../imgs/Yulia.jpg";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";

const store = {
  // стейт (данные)
  _state: {
    messagesWindow: {
      contacts: [
        { img: Alexey, id: 2, name: "Alexey" },
        { img: Yulia, id: 3, name: "Ylia" },
      ],

      dialogs: [
        { id: 1, message: "Hello, how are you?" },
        { id: 2, message: "Hi! Good, what about you?" },
        { id: 1, message: "Not bad.. Do you go to gym today?" },
        { id: 2, message: "Of Course!" },
        { id: 2, message: "I`m really want make a hard exercise!" },
      ],

      valueMessage: "",
    },

    profileWindow: {
      about: [{ name: "Marat", surname: "Bashirov", id: 1 }],
      posts: [
        {
          id: 1,
          date: "15.10.2023",
          time: "10:38:00",
          post: "It is my first post!",
        },
        {
          id: 2,
          date: "15.10.2023",
          time: "10:38:06",
          post: "It is my second post!",
        },
      ],
      valuePost: "",
    },
  },

  getPostValue() {
    return this._state.profileWindow.valuePost;
  },

  getState() {
    return this._state;
  },

  cleanPostValue() {
    this._state.profileWindow.valuePost = "";
  },

  _callSubscriber() {},

  getMessageText() {
    return this._state.messagesWindow.valueMessage;
  },

  cleanMessageText() {
    this._state.messagesWindow.valueMessage = '';
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profileWindow = profileReducer(this._state.profileWindow, action)
    this._state.messagesWindow = messagesReducer(this._state.messagesWindow, action)

    this._callSubscriber(this._state);
  },
};


export default store;
