import Marat from "../imgs/Marat.jpg";
import Yulia from "../imgs/Yulia.jpg";

const store = {
  // стейт (данные)
  _state: {
    dialogs: [
      { id: "1", message: "Hello, how are you?" },
      { id: "2", message: "Hi! Good, what about you?" },
      { id: "1", message: "Not bad.. Do you go to street  with me?" },
      { id: "2", message: "Of Course!" },
      { id: "2", message: "I`m really want go to with you...!" },
    ],

    contacts: [
      { img: Marat, id: "1", name: "Marat" },
      { img: Yulia, id: "2", name: "Ylia" },
    ],

    profile: {
      about: [{ name: "Marat", surname: "Bashirov", id: "1" }],
      posts: [
        {
          id: 1,
          date: "15.10.2023",
          time: "10:38:07",
          post: "It is my first post!",
        },
        {
          id: 2,
          date: "15.10.2023",
          time: "10:38:06",
          post: "It is my second post!",
        },
      ],
      valuePost: "new Value Post",
    },
  },

  // метод возвращающий newValue
  getPostValue() {
    return this._state.profile.valuePost;
  },

  // метод возвращающий стейт
  getState() {
    return this._state;
  },

  // метод очищающий newValue
  cleanPostValue() {
    this._state.profile.valuePost = "";
  },

  // метод "подмена". Можно использовать только в объекте store
  _callSubscriber() {},

  // метод, который берет функцию и вставляет его в _callSubscriber
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    // Добавление нового поста. Просто как два плюс два
    if (action.type === "ADD-POST") {
      // нужен для нумерации постов
      const lastPost = this._state.profile.posts.length;
      // для добавления даты создания поста
      let newDate = new Date();
      let date = newDate.toLocaleDateString();
      let time = newDate.toLocaleTimeString();

      // в _state.posts нужно добавлять данные в объекте
      this._state.profile.posts.push({
        id: lastPost + 1,
        date: date,
        time: time,
        post: this.getPostValue(),
      });

      // чистим _state.newValue
      this.cleanPostValue();

      // вызов отрисовки
      this._callSubscriber(this._state);
    }
    if (action.type === "CHANGE-VALUE-POST") {
      // метод изменения newValue на новое значение
      this._state.profile.valuePost = action.text;

      // вызов отрисовки
      this._callSubscriber(this._state);
    }
  },
};

export default store;
