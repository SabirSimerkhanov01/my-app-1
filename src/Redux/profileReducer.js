const CHANGE_VALUE_POST = "CHANGE-VALUE-POST";
const ADD_POST = "ADD-POST";

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      const lastPost = state.posts.length;
      let newDate = new Date();
      let date = newDate.toLocaleDateString();
      let time = newDate.toLocaleTimeString();

      state.posts.push({
        id: lastPost + 1,
        date: date,
        time: time,
        post: state.valuePost,
      });

      state.valuePost = "";
      return state;

    case CHANGE_VALUE_POST:
      state.valuePost = action.text;
      return state;

    default:
      return state;
  }
};

export const changeValuePost = (text) => ({
  type: CHANGE_VALUE_POST,
  text: text,
});

export const addPost = () => ({
  type: ADD_POST,
});

export default profileReducer;
