import React, { useState, forwardRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import NavigationItem from './navigation_item';
import styles from './header.module.css';

library.add(fab, fas);
const Header = forwardRef(({ onReset }, ref) => {
    const [showNav, setShowNav] = useState(false);

    const onToggle= () => {
        setShowNav(showNav => !showNav);
    }
    
    const toggle = showNav === false ? styles.true : styles.false;
    const hide = showNav === false ? styles.nav : styles.hide;

    const NAVIGATION_ITEMS = ['About', 'Skills', 'Projects', 'Contact'];

    return (
        <header className={styles.header}>
            <p href="" className={styles.logo} onClick={() => {
                onReset()
                onToggle()
                }
            }>
                Jun .
            </p>
            <div className={`${styles.nav} ${hide}`}>
                <ul className={styles.indexBox} ref={ref} onClick={() => onToggle()}>
                    {NAVIGATION_ITEMS.map(item => (
                        <NavigationItem key={item} item={item} />
                    ))}
                </ul>
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
            </div>
            <div className={`${styles.true} ${toggle}`} onClick={() => onToggle()}>
                <div className={styles.trigger}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={styles.shadow}></div>
            </div>
        </header>
    )
});

export default Header;