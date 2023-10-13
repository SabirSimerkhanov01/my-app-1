import React from "react";
import s from './Header.module.css';
import lightning from '../../imgs/lightning.svg';
import magnifier from '../../imgs/magnifier.svg';
import house from '../../imgs/house.svg';
import lightning2 from '../../imgs/lightning2.svg';
import videocamera from '../../imgs/videocamera.svg';
import human from '../../imgs/human.svg';
import bag from '../../imgs/bag.svg';
import bell from '../../imgs/bell.svg';
import message from '../../imgs/message.svg';
import settings from '../../imgs/settings.svg';
import person from '../../imgs/person.svg';

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.logos}>
                <img className={s.logo} alt="logoOfNet" style={{ height: 36, width: 36 }} src={lightning} />
                <span className={s.span}>Sociala.</span>
            </div>
            <form className={s.form}>
                <div className={s.innerForm}>
                    <img className={s.logo} alt="magnifer" style={{ height:20, width:20 }} src={magnifier} />
                    <input defaultValue="Start typing to search.."></input>
                </div>
            </form>
            <nav className={s.nav}>
                <div className={s.elements}>
                    <div className={s.element}>
                        <img src={house} alt="house" />
                    </div>
                    <div className={s.element}>
                        <img src={lightning2} alt="lightning2" />
                    </div>
                    <div className={s.element}>
                        <img src={videocamera} alt="videocamera" />
                    </div>
                    <div className={s.element}>
                        <img src={human} alt="human" />
                    </div>
                    <div className={s.element}>
                        <img src={bag} alt="bag" />
                    </div>
                </div>

                <div className={s.elementsMain}>
                    <div className={s.elementMain}>
                        <img src={bell} alt="bell" />
                    </div>
                    <div className={s.elementMain}>
                        <img src={message} alt="message" />
                    </div>
                    <div className={s.elementMain}>
                        <img src={settings} alt="settings" />
                    </div>
                    <div className={s.elementMain}>
                        <img src={person} alt="person" />
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Header;