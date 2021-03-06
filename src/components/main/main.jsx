import React from 'react';
import styles from './main.module.css';

const Main = ({ useScrollFadeIn, pdf }) => {
  const animatedItem = {
    0: useScrollFadeIn('down', 1, 0),
    1: useScrollFadeIn('down', 1, 0.1),
  };

  return (
    <section className={styles.main}>
      <div className={styles.text} {...animatedItem[0]}>
        <div className={styles.title}>
          <p className={styles.name}>Hi, i am Junhyung Park</p>
          <h1 className={styles.position}>FrontEnd Developer</h1>
        </div>
        <p class={styles.introduce}>
          안녕하세요 2년차 퍼블리셔 및 신입 프론트엔드 개발자 박준형입니다.{' '}
          <br />
          웹접근성과 웹표준을 준수하여 퍼블리싱하고, <br />
          최신 문법의 자바스크립트(ES6+)와 리액트를 통해 개발합니다.
        </p>
        <a href={pdf} target='_blank' rel='noreferrer'>
          <button className={styles.button}>SEE MY RESUME</button>
        </a>
      </div>
      <div className={styles.img} {...animatedItem[1]}></div>
    </section>
  );
};

export default Main;
