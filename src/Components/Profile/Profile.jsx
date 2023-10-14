import React from "react";
import s from './Profile.module.css';
import Header from './Header/Header';
import About from "./About/About";

const Profile = (props) => {
    const { profile } = props;

    const aboutData = (data) => data.map( el => <About name={el.name} surname={el.surname} /> )

    return (
        <div className={s.profile}>
            { aboutData(profile) }
        </div>
    )
};

export default Profile;