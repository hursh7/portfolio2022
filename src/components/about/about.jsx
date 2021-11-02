import React from 'react';
import styles from './about.module.css';

const About = (props) => (
        <section className={styles.about}>
            <h2 className={styles.index}>About Me</h2>
            <div className={styles.container}>
                <div className={styles.item}>
                    <img className={styles.icon} src="/images/carrer.png" alt="아이템" />
                    <p className={styles.title}>Profile</p>
                    <ul className={styles.content}>
                        <li className={styles.subtitle}>Name</li>
                        <li className={styles.text}>박준형 (1994.10.21)</li>
                        <li className={styles.subtitle}>E-mail</li>
                        <li className={styles.text}>junhp1994@gmail.com</li>
                    </ul>
                </div>
                <div className={styles.item}>
                    <img className={styles.icon} src="/images/education.png" alt="아이템" />
                    <p className={styles.title}>Carrer</p>
                    <ul className={styles.content}>
                        <li className={styles.subtitle}>2020.04 ~ 2021.04</li>
                        <li className={styles.text}>(주)엑사이이엔티 퍼블리싱팀 퍼블리셔 근무</li>
                        <li className={styles.subtitle}>2019.07 ~ 2020.01</li>
                        <li className={styles.text}>(주)제제컴즈 UI/UX 디자인팀 퍼블리셔 근무</li>
                    </ul>
                </div>
                <div className={styles.item}>
                    <img className={styles.icon} src="/images/education02.png" alt="아이템" />
                    <p className={styles.title}>Education</p>
                    <ul className={styles.content}>
                        <li className={styles.subtitle}>2019.02 ~ 2019.07</li>
                        <li className={styles.text}>경기산업기술교육센터 웹퍼블리셔 과정 수료</li>
                        <li className={styles.subtitle}>2013.03 ~ 2019.02</li>
                        <li className={styles.text}>용인대학교 문화콘텐츠학과 졸업</li>
                    </ul>
                </div>
            </div>
        </section>    
    );

export default About;