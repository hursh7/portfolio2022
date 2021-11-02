import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import Header from './components/header/header';
import SideMenu from './components/side_menu/side_menu';
import Main from './components/main/main';
import About from './components/about/about';
import Tech from './components/tech/tech';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [btnStatus, setBtnStatus] = useState(false);

  const handleFollow = () => {
    setScrollY(window.scrollY);
    if(scrollY > 100) {
      setBtnStatus(true);
    } else {
      setBtnStatus(false);
    }
  }

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    setScrollY(0);
    setBtnStatus(false);
  }

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow)
    }
    watch();
    return () => {
      window.removeEventListener('scroll', handleFollow)
    }
  })

  return (
  <div className={styles.wrap}>
    <Header onReset={handleTop} />
    <SideMenu />
    <Main />
    {/* <About /> */}
    <Tech />
    {btnStatus && <button className={`${styles.button} ${styles.active}`} onClick={handleTop}>Top</button>}
  </div>
  )
}

export default App;
