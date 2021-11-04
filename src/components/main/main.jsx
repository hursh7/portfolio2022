import React from 'react';
import styles from './main.module.css';

const Main = () => (
        <section className={styles.main}>
            <div className={styles.text}>
                <div className={styles.title}>
                    <p className={styles.name}>Hi, i am Junhyung Park</p>
                    <h1 className={styles.position}>FrontEnd Developer</h1>
                </div>
                <p class={styles.introduce}>
                    안녕하세요 2년차 퍼블리셔 및 신입 프론트엔드 개발자 박준형입니다. <br /> 
                    웹접근성과 웹표준을 준수하여 퍼블리싱하고, <br /> 
                    최신 문법의 자바스크립트(ES6+)와 리액트를 통해 개발합니다.
                </p>
                <button className={styles.button}>SEE MY RESUME</button>
            </div>
            <div className={styles.img}></div>
        </section>
    );

export default Main;