import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import styles from './app.module.css';
import Header from './components/header/header';
import SideMenu from './components/side_menu/side_menu';
import Main from './components/main/main';
import About from './components/about/about';
import Tech from './components/tech/tech';
import Project from './components/project/project';
import Footer from './components/footer/footer';
import Pdf from 'static/resume_Jun.pdf';
import { useScrollFadeIn } from './hooks';

library.add(fab, far, fas);
function App() {
  const [scrollY, setScrollY] = useState(0);
  const [btnStatus, setBtnStatus] = useState(false);
  const focusRef = useRef();
  const IndexRef = useRef();

  const handleFollow = () => {
    setScrollY(window.scrollY);
    if (scrollY > 100) {
      setBtnStatus(true);
    } else {
      setBtnStatus(false);
    }
  };

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setScrollY(0);
    setBtnStatus(false);
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener('scroll', handleFollow);
    };
  });

  useEffect(() => {
    let nodes = [];

    const IndexClickEvent = (node, i) => {
      nodes.push(node);

      node.addEventListener('click', () => {
        focusRef.current.children[i].scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      });
    };

    if (IndexRef.current) {
      [...IndexRef.current.children].map((node, i) => IndexClickEvent(node, i));
    }
    return nodes.map((node, i) =>
      node.removeEventListener('click', IndexClickEvent(node, i))
    );
  }, []);

  return (
    <div className={styles.wrap}>
      <Header
        onReset={handleTop}
        ref={IndexRef}
        FontAwesomeIcon={FontAwesomeIcon}
      />
      <SideMenu FontAwesomeIcon={FontAwesomeIcon} pdf={Pdf} />
      <Main useScrollFadeIn={useScrollFadeIn} pdf={Pdf} />
      <div ref={focusRef}>
        <About
          useScrollFadeIn={useScrollFadeIn}
          FontAwesomeIcon={FontAwesomeIcon}
        />
        <Tech useScrollFadeIn={useScrollFadeIn} />
        <Project useScrollFadeIn={useScrollFadeIn} />
        <Footer
          useScrollFadeIn={useScrollFadeIn}
          FontAwesomeIcon={FontAwesomeIcon}
          pdf={Pdf}
        />
      </div>
      {btnStatus && (
        <button
          className={`${styles.button} ${styles.active}`}
          onClick={handleTop}
        >
          <FontAwesomeIcon icon={['fas', 'arrow-alt-circle-up']} />
        </button>
      )}
    </div>
  );
}

export default App;
