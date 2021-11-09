import React, { useState } from 'react';
import styles from './header.module.css';

const Header = ({ onReset }) => {
    const [dropDown, setDropDown] = useState(false);

    const onToggle= () => {
      setDropDown(dropDown => !dropDown);
      console.log(`${dropDown}`);
    }
    const toggle = dropDown === false ? styles.show : styles.hide;

    return (
        <header className={styles.header}>
            <p href="" className={styles.logo} onClick={() => onReset()}>
                Jun .
            </p>
            <ul className={styles.nav}>
                <li className={styles.index}>
                    <a href="#about">About</a>
                </li>
                <li className={styles.index}>
                    <a href="#home">Skills</a>
                </li>
                <li className={styles.index}>
                    <a href="#home">Projects</a>
                </li>
                <li className={styles.index}>
                    <a href="#home">Resume</a>
                </li>
            </ul>
            <div className={`${styles.show} ${toggle}`} onClick={() => onToggle()} >
                <div className={styles.trigger}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    )
};

export default Header;