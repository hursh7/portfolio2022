import React, { forwardRef } from 'react';
import styles from './dummy.module.css';

const Dummy = forwardRef(({ onReset }, ref) => { 
    return (
        <header className={styles.header}>
            <p href="" className={styles.logo} onClick={() => onReset()}>
                Jun .
            </p>
            <ul className={styles.nav} ref={ref}>
                <li className={styles.index} >
                    Main
                </li>
                <li className={styles.index} >
                    About
                </li>
                <li className={styles.index}>
                    Skills
                </li>
                <li className={styles.index}>
                    Projects
                </li>
            </ul>
        </header>
    )
});

export default Dummy;