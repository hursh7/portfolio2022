import React, { forwardRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import styles from './about.module.css';

library.add(fas, far);
const About = forwardRef(({ useScrollFadeIn }, ref) => {
    const animatedItem = {
        0: useScrollFadeIn('right', 1, 0),
        1: useScrollFadeIn('left', 1, 0.1),
    };

    return (
        <div ref={ref}>
            <section className={styles.about}>
                <h2 className={styles.index}>About Me</h2>
                <div className={styles.container}>
                    <div className={styles.profile} {...animatedItem[0]}>
                        <div className={styles.canvas}>
                            <img className={styles.img} src={require('../../static/images/main_bg05-2.svg').default} alt="" />
                        </div>
                        <div className={styles.info}>
                            <ul className={styles.itembox}>
                                <li className={styles.item}>
                                    <FontAwesomeIcon className={styles.icon} icon={["far", "user"]} /> 
                                    <span>Name</span>
                                </li>
                                <li className={styles.item}>
                                    <FontAwesomeIcon className={styles.icon} icon={["far", "calendar-alt"]} /> 
                                    <span>Birth</span> 
                                </li>
                                <li className={styles.item}>
                                    <FontAwesomeIcon className={styles.icon} icon={["far", "envelope"]} /> 
                                    <span>Email</span>
                                </li>
                            </ul>
                            <ul className={styles.infotext}>
                                <li>박준형</li>
                                <li>1994.10.21 </li>
                                <li>junhp1994@gmail.com</li>
                            </ul>
                        </div>    
                    </div>
                    <div className={styles.history} {...animatedItem[1]}>
                        <div className={styles.content}>
                            <h3 className={styles.title}>
                                <img className={styles.icon2} src={require('../../static/images/about_career.png').default} alt="" />
                                <span>Career</span>
                            </h3>
                            <ul className={styles.detail}>
                                <li>(주)엑사이이엔티 퍼블리싱팀</li>
                                <li>퍼블리셔</li>
                                <li>2020.04 ~ 2021.04</li>
                            </ul>
                            <ul className={styles.detail}>
                                <li>(주)제제컴즈  UI/UX 디자인팀</li>
                                <li>퍼블리셔</li>
                                <li>2019.07 ~ 2020.01</li>
                            </ul>
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.title}>
                                <img className={styles.icon2} src={require('../../static/images/about_education.png').default} alt="" />
                                <span>Education</span>
                            </h3>
                            <ul className={styles.detail}>
                                <li>경기산업기술교육센터</li>
                                <li>웹퍼블리셔 과정 수료</li>
                                <li>2019.02 ~ 2019.07</li>
                            </ul>
                            <ul className={styles.detail}>
                                <li>용인대학교</li>
                                <li>문화콘텐츠학과 졸업</li>
                                <li>2019.03 ~ 2019.04</li>
                            </ul>
                        </div>
                        <div className={`${styles.content} ${styles.mb0}`}>
                            <h3 className={styles.title}>
                                <img className={styles.icon2} src={require('../../static/images/about_experience.png').default} alt="" />
                                <span>Experience</span>
                            </h3>
                            <ul className={styles.detail}>
                                <li>대법원 전자가족관계등록시스템</li>
                                <li>퍼블리싱 / 웹표준 및 접근성 심사</li>
                                <li>2020.04 ~ 2021.04</li>
                            </ul>
                            <ul className={styles.detail}>
                                <li>JEJECoMMS Co. & SHIFT WEB</li>
                                <li>자사 홈페이지 및 앱 소개 페이지 퍼블리싱 및 유지보수</li>
                                <li>2019.07 ~ 2020.01</li>
                            </ul>
                            <ul className={styles.detail}>
                                <li>모바일 명함 SHIFT</li>
                                <li>모바일 앱 UI/UX 디자인 및 유지보수</li>
                                <li>2019.07 ~ 2020.01</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>      
        </div>
    )
}); 

export default About;