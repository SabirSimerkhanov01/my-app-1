import React from "react";
import s from "./Profile.module.css";
import Posts from "./Posts/Posts";
import About from "./About/About";

const Profile = (props) => {
  // Отрисовка. Через map, ничего сложного.
  const aboutData = (data) =>
    data.map((el) => <About name={el.name} surname={el.surname} />);
  const postsData = (data) =>
    data.slice().reverse().map((el) => <Posts date={el.date} time={el.time} id={el.id} post={el.post} />);

    const newPostElement = React.createRef();

    const { profile } = props; 

    let changePost = () => {
      let text = newPostElement.current.value;
      let action = {
        type: "CHANGE-VALUE-POST",
        text: text
      };

      props.dispatch(action);
    };

    let addPost = () => {
      let action = {
        type: "ADD-POST"
      };

      props.dispatch(action);
    };

  return (
    <div className={s.profile}>
      {aboutData(profile.about)}

      <div className={s.posts}> 

        <h1>Posts</h1>
        <textarea
          ref={newPostElement}
          onChange={changePost}
          value={props.profile.valuePost}
          className={s.textarea}
        ></textarea>
        <button onClick={ addPost }>Button</button>

        { postsData(profile.posts) }
      </div>
    </div>
  );
  /*

  */
};

export default Profile;
