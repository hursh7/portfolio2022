import React, { forwardRef } from 'react';
import ProjectItem from './project_item';
import project_img01 from 'static/images/project_img01.jpg';
import project_img02 from 'static/images/project_img02.jpg';
import project_img03 from 'static/images/project_img03.jpg';
import link_github from 'static/images/link_github.svg';
import link_page from 'static/images/link_page.svg';
import styles from './project.module.css';

const PROJECTS_ITEMS = [
     {
          image: project_img01,
          number: 1,
          title: 'cardMaker',
          description: '사용자의 정보를 실시간으로 업데이트 할 수 있는 반응형 명함 어플리케이션입니다. React와 React Router로 개발하였습니다. Firebase의 Auth API를 통해 소셜 미디어 로그인 기능을 구현하고, Real Time Database를 이용해 데이터를 실시간으로 연동하였습니다.',
          tec01: '#React',
          tec02: '#React-Router-Dom',
          tec03: '#PostCSS',
          tec04: '#Firebase',
          tec05: '#Cloudinary',
          icon01: link_github,
          icon02: link_page,
          path01: 'Github',
          path02: 'Page',
     },
     {
          image: project_img02,
          number: 2,
          title: 'Youtube (CloneCoding)',
          description: '유튜브 클론코딩입니다. React로 개발 하였고, netlify로 배포 하였습니다. 포스트맨 툴을 사용해 유튜브 APIs 데이터를 받아와서 인기 동영상 목록 보여주기, 검색 기능 등을 구현 하였습니다.',
          tec01: '#React',
          tec02: '#PostCSS',
          tec03: '#PostCSS',
          tec04: null,
          tec05: null,
          icon01: link_github,
          icon02: link_page,
          path01: 'Github',
          path02: 'Page',
     },
     {
          image: project_img03,
          number: 3,
          title: 'Portfolio',
          description: '유튜브 클론코딩입니다. React로 개발 하였고, netlify로 배포 하였습니다. 포스트맨 툴을 사용해 유튜브 APIs 데이터를 받아와서 인기 동영상 목록 보여주기, 검색 기능 등을 구현 하였습니다.',
          tec01: '#React',
          tec02: '#PostCSS',
          tec03: '#PostCSS',
          tec04: null,
          tec05: null,
          icon01: link_github,
          icon02: link_page,
          path01: 'Github',
          path02: 'Page',
     },
]

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
                         {PROJECTS_ITEMS.map((item, index) => (
                              <ProjectItem 
                              key={index} 
                              item={item}
                              index={index}
                              animatedItem={animatedItem}
                              />
                         ))}
                    </div>
               </section>     
          </div>
     )
});

export default Project;