import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import styles from './side_menu.module.css';

library.add(fab, fas);
const SideMenu = (props) => (
        <ul className={styles.nav}>
            <li>
                <FontAwesomeIcon icon={["fab", "github-square"]} />
            </li>
            <li>
                <FontAwesomeIcon icon={["fab", "blogger-b"]} />
            </li>
            <li>
                <FontAwesomeIcon icon={["fab", "google"]} />
            </li>
        </ul>
    );

export default SideMenu;