import React, { forwardRef } from 'react';
import styles from './project.module.css';

const Project = forwardRef(({ useScrollFadeIn }, ref) => {
     const animatedItem = {
          0: useScrollFadeIn('right', 1, 0),
          1: useScrollFadeIn('left', 1, 0.1),
          2: useScrollFadeIn('right', 1, 0.2),
      };

     return (
          <div ref={ref}>
               <section className={styles.project}>
                    <h2 className={styles.index}>Projects</h2>
                    <div className={styles.container}>
                         <div className={styles.item} {...animatedItem[0]}>
                              <div className={`${styles.canvas} ${styles.canvas01}`}></div>
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
                                        <a href="https://github.com/hursh7/business-card-maker" target="_blank"  rel="noreferrer" className={styles.link}>
                                             <img className={styles.icon} src={require('../../static/images/link_github.svg').default} alt="git" />
                                             <span className={styles.path}>Github</span>
                                        </a>
                                        <a href="https://hursh7.github.io/business-card-maker/" target="_blank"  rel="noreferrer" className={styles.link}>
                                             <img className={styles.icon} src={require('../../static/images/link_page.svg').default} alt="page" />
                                             <p className={styles.path}>Page</p>
                                        </a>
                                   </div>
                              </div>
                         </div>
                         <div className={styles.item} {...animatedItem[1]}>
                              <div className={`${styles.canvas} ${styles.canvas02}`}></div>
                              <div className={styles.text}>
                              <div className={styles.number}>02</div>
                                   <h3 className={styles.title}>Youtube (CloneCoding)</h3>
                                   <p className={styles.introduce}>
                                        유튜브 클론코딩입니다. React로 개발 하였고, netlify로 배포 하였습니다. 포스트맨 툴을 사용해 유튜브 APIs 데이터를 받아와서 인기 동영상 목록 보여주기, 검색 기능 등을 구현 하였습니다.   
                                   </p>
                                   <div className={styles.tecbox}>
                                        <div className={styles.tec}>#React</div>
                                        <div className={styles.tec}>#PostCSS</div>
                                        <div className={styles.tec}>#Postman</div>
                                   </div>
                                   <div className={styles.linkbox}>
                                        <a href="https://github.com/hursh7/youtube-clone" target="_blank"  rel="noreferrer" className={styles.link}>
                                             <img className={styles.icon} src={require('../../static/images/link_github.svg').default} alt="git" />
                                             <span className={styles.path}>Github</span>
                                        </a>
                                        <a href="https://hursh7-juntube.netlify.app/" target="_blank"  rel="noreferrer" className={styles.link}>
                                             <img className={styles.icon} src={require('../../static/images/link_page.svg').default} alt="page" />
                                             <p className={styles.path}>Page</p>
                                        </a>
                                   </div>
                              </div>
                         </div>
                         <div className={styles.item} {...animatedItem[2]}>
                              <div className={`${styles.canvas} ${styles.canvas03}`}></div>
                              <div className={styles.text}>
                              <div className={styles.number}>03</div>
                                   <h3 className={styles.title}>Portfolio</h3>
                                   <p className={styles.introduce}>
                                        유튜브 클론코딩입니다. React로 개발 하였고, netlify로 배포 하였습니다. 포스트맨 툴을 사용해 유튜브 APIs 데이터를 받아와서 인기 동영상 목록 보여주기, 검색 기능 등을 구현 하였습니다.   
                                   </p>
                                   <div className={styles.tecbox}>
                                        <div className={styles.tec}>#React</div>
                                        <div className={styles.tec}>#PostCSS</div>
                                   </div>
                                   <div className={styles.linkbox}>
                                        <a href="https://github.com/hursh7/youtube-clone" target="_blank"  rel="noreferrer" className={styles.link}>
                                             <img className={styles.icon} src={require('../../static/images/link_github.svg').default} alt="git" />
                                             <span className={styles.path}>Github</span>
                                        </a>
                                        <a href="https://hursh7-juntube.netlify.app/" target="_blank"  rel="noreferrer" className={styles.link}>
                                             <img className={styles.icon} src={require('../../static/images/link_page.svg').default} alt="page" />
                                             <p className={styles.path}>Page</p>
                                        </a>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>     
          </div>
     )
});

export default Project;