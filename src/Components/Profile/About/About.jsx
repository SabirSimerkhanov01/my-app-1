import React from "react";
import s from './About.module.css';


const About = (props) => {

    return (
        <div className={s.about}>
            <div className={s.side}></div>

            <div className={s.inicial}>
                <div className={s.img}></div>
                <div className={s.names}>
                    <p>Name: {props.name}</p>
                    <p>Surname: {props.surname}</p>
                </div>
            </div>

        </div>
    )
};

export default About;