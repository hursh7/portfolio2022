import React, { useState, forwardRef } from 'react';
import NavigationItem from './navigation_item';
import styles from './header.module.css';

const NAVIGATION_ITEMS = ['About', 'Skills', 'Projects', 'Contact'];

const Header = forwardRef(({ onReset, FontAwesomeIcon }, ref) => {
  const [showNav, setShowNav] = useState(false);

  const onToggle = () => {
    setShowNav(showNav => !showNav);
  };

  const toggle = showNav === false ? styles.true : styles.false;
  const hide = showNav === false ? styles.nav : styles.hide;

  return (
    <header className={styles.header}>
      <p
        href=''
        className={styles.logo}
        onClick={() => {
          onReset();
          onToggle();
        }}
      >
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
            <a
              href='https://github.com/hursh7'
              target='_blank'
              rel='noreferrer'
            >
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
            <a href='static/resume_Jun.pdf' target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={['fas', 'id-badge']} />
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
  );
});

export default Header;
