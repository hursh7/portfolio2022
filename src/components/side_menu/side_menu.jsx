import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import styles from './side_menu.module.css';

library.add(fab, fas);
const SideMenu = () => (
        <ul className={styles.nav}>
            <li>
                <a href="https://github.com/hursh7" target="_blank"  rel="noreferrer">
                    <FontAwesomeIcon icon={["fab", "github-square"]} />
                </a>
            </li>
            <li>
                <a href="https://github.com/hursh7" target="_blank"  rel="noreferrer">
                    <FontAwesomeIcon icon={["fab", "blogger-b"]} />
                </a>
            </li>
            <li>
                <a href="mailto:junhp1994@gmail.com" target="_blank"  rel="noreferrer">
                    <FontAwesomeIcon icon={["fab", "google"]} />
                </a>
            </li>
        </ul>
    );

export default SideMenu;