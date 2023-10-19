import React from "react";
import s from "./Profile.module.css";
import Posts from "./Posts/Posts";
import About from "./About/About";
import { changeValuePost, addPost } from "../../Redux/profileReducer";

// Отрисовка about
const aboutData = (data) =>
  data.map((el) => <About name={el.name} surname={el.surname} />);

// Отрисовка Posts
const postsData = (data) =>
  data
    .slice()
    .reverse()
    .map((el) => (
      <Posts date={el.date} time={el.time} id={el.id} post={el.post} />
    ));

const Profile = (props) => {
  const { profileWindow } = props;

  const newPostElement = React.createRef();

  let changePost = () => {
    let text = newPostElement.current.value;
    props.dispatch(changeValuePost(text));
  };

  let addPosts = () => {
    props.dispatch(addPost());
  };

  return (
    <div className={s.profile}>
      {aboutData(profileWindow.about)}

      <div className={s.posts}>
        <h1>Posts</h1>
        <textarea
          ref={newPostElement}
          onChange={changePost}
          value={profileWindow.valuePost}
          className={s.textarea}
        ></textarea>
        <button onClick={addPosts}>Button</button>

        {postsData(profileWindow.posts)}
      </div>
    </div>
  );
};

export default Profile;
