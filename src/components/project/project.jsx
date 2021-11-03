import React from 'react';
import styles from './project.module.css';

const Project = (props) => (
       <section className={styles.project}>
            <h2 className={styles.index}>Projects</h2>
            <div className={styles.container}>
                 <div className={styles.item}>
                      <div className={styles.canvas}>
                           <img className={styles.img} src="/images/" alt="포트폴리오 이미지" />
                      </div>
                      <div className={styles.text}>
                      <div className={styles.number}>01</div>
                         <h3 className={styles.title}>CardMaker</h3>
                         <p className={styles.introduce}>
                              사용자의 정보를 실시간으로 업데이트 할 수 있는 반응형 명함 어플리케이션입니다. React와 React Router로 개발하였습니다. Firebase의 Auth API를 통해 소셜 미디어 로그인 기능을 구현하고, Real Time Database를 이용해 데이터를 실시간으로 연동하였습니다.   
                         </p>
                         <div className={styles.tecbox}>
                              <div className={styles.tec}>#React</div>
                              <div className={styles.tec}>#React-Router-Dom</div>
                              <div className={styles.tec}>#PostCSS</div>
                              <div className={styles.tec}>#Firebase</div>
                              <div className={styles.tec}>#Cloudinary</div>
                         </div>
                         <div className={styles.linkbox}>
                              <a href="https://github.com/hursh7/business-card-maker" target="_blank" className={styles.link}>
                                   <img className={styles.icon} src="/images/link_github.svg" alt="깃허브" />
                                   <span className={styles.path}>Github</span>
                              </a>
                              <a href="https://hursh7.github.io/business-card-maker/" target="_blank" className={styles.link}>
                                   <img className={styles.icon} src="/images/link_page.svg" alt="깃허브" />
                                   <span className={styles.path}>Page</span>
                              </a>
                         </div>
                      </div>
                 </div>
                 <div className={styles.item}>2</div>
                 <div className={styles.item}>3</div>
            </div>
       </section>     
    );

export default Project;