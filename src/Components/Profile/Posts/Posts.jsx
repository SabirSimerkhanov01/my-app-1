import React from "react";
import s from './Posts.module.css';

const Posts = (props) => {
    return (
        <div className={s.posts}>
            <p>Post: {props.post}</p>
            <p className={s.date}>Date: {props.date}</p>
            <p className={s.date}>Time: {props.time}</p>
            <p>Id: {props.id}</p>
        </div>
    )
};

export default Posts;