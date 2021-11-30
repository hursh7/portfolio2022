import React, { forwardRef } from 'react';
import career from 'static/images/about_career.png';
import education from 'static/images/about_education.png';
import experience from 'static/images/about_experience.png';
import styles from './about.module.css';

const CONTENT_ITEMS = [
    {   
        label: 'Carrer',
        image: career,
        title1: '(주)엑사이이엔티 퍼블리싱팀',
        desc1: '퍼블리셔',
        date1: '2020.04 ~ 2021.04',
        title2: '(주)제제컴즈',
        desc2: '퍼블리셔',
        date2: '2019.07 ~ 2020.01',
        title3: null,
        desc3: null,
        date3: null,
    },
    {   
        label: 'Education',
        image: education,
        title1: '경기산업기술교육센터',
        desc1: '웹퍼블리셔 과정 수료',
        date1: '2019.02 ~ 2019.07',
        title2: '용인대학교',
        desc2: '문화콘텐츠학과 졸업',
        date2: '2019.03 ~ 2019.04',
        title3: null,
        desc3: null,
        date3: null,
    },
    {   
        label: 'Experience',
        image: experience,
        title1: '대법원 전자가족관계등록시스템',
        desc1: '퍼블리싱 / 웹표준 및 접근성 심사',
        date1: '2020.04 ~ 2021.04',
        title2: 'JEJECoMMS Co. & SHIFT WEB',
        desc2: '자사 홈페이지 및 앱 소개 페이지 퍼블리싱 및 유지보수',
        date2: '2019.07 ~ 2020.01',
        title3: '모바일 명함 SHIFT',
        desc3: '모바일 앱 UI/UX 디자인 및 유지보수',
        date3: '2019.07 ~ 2020.01',
    },
]

const About = forwardRef(({ useScrollFadeIn, FontAwesomeIcon }, ref) => {
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
                            <img className={styles.img} src={require('static/images/about_bg.svg').default} alt="profile" />
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
                    <div className={styles.history}{...animatedItem[1]}>
                        {CONTENT_ITEMS.map((item, i) => (
                            <div key={item.label} className={styles.content}>
                                <h3 className={styles.title}>
                                    <img src= {item.image} className={styles.icon2} alt="" />
                                    <span>{item.label}</span>
                                </h3>
                                <ul className={styles.detail}>
                                    <li>{item.title1}</li>
                                    <li>{item.desc1}</li>
                                    <li>{item.date1}</li>
                                </ul>
                                <ul className={styles.detail}>
                                    <li>{item.title2}</li>
                                    <li>{item.desc2}</li>
                                    <li>{item.date2}</li>
                                </ul>
                                {item.title3 !== null && <ul className={styles.detail}>
                                    <li>{item.title3}</li>
                                    <li>{item.desc3}</li>
                                    <li>{item.date3}</li>
                                </ul>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>      
        </div>
    )
}); 

export default About;