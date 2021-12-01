import React from 'react';
import styles from './side_menu.module.css';

const SideMenu = ({FontAwesomeIcon}) => (
        <ul className={styles.link}>
            <li>
                <a href="https://github.com/hursh7" target="_blank"  rel="noreferrer">
                    <FontAwesomeIcon icon={["fab", "github"]} />
                </a>
            </li>
            <li>
                <a href="https://sudsy-skink-5a5.notion.site/JS-94f29388c3be48cba2e921db41ff45ee" target="_blank"  rel="noreferrer">
                    <FontAwesomeIcon icon={["fas", "comment-dots"]} />
                </a>
            </li>
            <li>
                <a href="mailto:junhp1994@gmail.com" target="_blank"  rel="noreferrer">
                    <FontAwesomeIcon icon={["fas", "id-badge"]} />
                </a>
            </li>
        </ul>
    );

export default SideMenu;