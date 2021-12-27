import React from 'react';
import styles from './side_menu.module.css';

const SideMenu = ({ FontAwesomeIcon, pdf }) => (
  <ul className={styles.link}>
    <li>
      <a href='https://github.com/hursh7' target='_blank' rel='noreferrer'>
        <FontAwesomeIcon icon={['fab', 'github']} />
      </a>
    </li>
    <li>
      <a
        href='https://www.notion.so/junhp/205e0379c9444d30b32de2ddb7672ac5'
        target='_blank'
        rel='noreferrer'
      >
        <FontAwesomeIcon icon={['fas', 'comment-dots']} />
      </a>
    </li>
    <li>
      <a href={pdf} target='_blank' rel='noreferrer'>
        <FontAwesomeIcon icon={['fas', 'id-badge']} />
      </a>
    </li>
  </ul>
);

export default SideMenu;
