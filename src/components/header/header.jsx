import React from 'react';
import styles from './header.module.css';

const Header = ({ onReset }) => {
    
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
        </header>
    )
};

export default Header;