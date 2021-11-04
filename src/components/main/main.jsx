import React from 'react';
import styles from './main.module.css';

const Main = () => (
        <section className={styles.main}>
            <div className={styles.text}>
                <p className={styles.name}>Hi, i am Junhyung Park</p>
                <h1 className={styles.title}>FrontEnd Developer</h1>
                <p class={styles.introduce}>
                    안녕하세요 프론트엔드 개발자 박준형입니다. <br /> 
                    웹접근성과 웹표준을 준수하여 퍼블리싱 하고, <br /> 
                    최신 문법의 자바스크립트와 리액트를 통해 개발합니다.
                </p>
                <div className={styles.icons}>
                    <a className={styles.icon}>
                        <img src="" alt="" />
                    </a>
                    <a className={styles.icon}></a>
                    <a className={styles.icon}></a>
                </div>
                <button className={styles.button}>SEE MY RESUME</button>
            </div>
            <div className={styles.img}>
                <div className={styles.img2}></div>
            </div>
        </section>
    );

export default Main;