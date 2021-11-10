import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import styles from './header.module.css';

library.add(fab, fas);
const Header = ({ onReset, onAboutClick, onTechClick, onProjectClick }) => {
    const [dropDown, setDropDown] = useState(false);

    const onToggle= () => {
      setDropDown(dropDown => !dropDown);
      console.log(`${dropDown}`);
    }
    
    const toggle = dropDown === false ? styles.true : styles.false;
    const dropdown = dropDown === false ? styles.nav : styles.hide;

    return (
        <header className={styles.header}>
            <p href="" className={styles.logo} onClick={() => onReset()}>
                Jun .
            </p>
            <ul className={`${styles.nav} ${dropdown}`}>
                <li className={styles.index} onClick={() => onAboutClick()}>
                    <a href="#about">About</a>
                </li>
                <li className={styles.index} onClick={() => onTechClick()}>
                    <a href="#skills">Skills</a>
                </li>
                <li className={styles.index} onClick={() => onProjectClick()}>
                    <a href="#home">Projects</a>
                </li>
                <li className={styles.index}>
                    <a href="#home">Resume</a>
                </li>
                <ul className={styles.link}>
                    <li>
                        <a href="https://github.com/hursh7" target="_blank"  rel="noreferrer">
                            <FontAwesomeIcon icon={["fab", "github"]} />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/hursh7" target="_blank"  rel="noreferrer">
                            <FontAwesomeIcon icon={["fas", "comment-dots"]} />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:junhp1994@gmail.com" target="_blank"  rel="noreferrer">
                            <FontAwesomeIcon icon={["fab", "google"]} />
                        </a>
                    </li>
                </ul>
            </ul>
            <div className={`${styles.true} ${toggle}`} onClick={() => onToggle()} >
                <div className={styles.trigger}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={styles.shadow}></div>
            </div>
        </header>
    )
};

export default Header;