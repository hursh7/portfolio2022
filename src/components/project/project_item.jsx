import React from 'react';
import styles from './project_item.module.css';

const ProjectItem = ({item, index, animatedItem}) => (
         <div className={styles.item} {...animatedItem[index]}>
            <img src={item.image} className={styles.canvas} alt="프로젝트 이미지" />
            <div className={styles.text}>
                <div className={styles.number}>0{item.number}</div>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>
                        {item.description}   
                </p>
                <div className={styles.tecbox}>
                    <div className={styles.tec}>{item.tec01}</div>
                    <div className={styles.tec}>{item.tec02}</div>
                    <div className={styles.tec}>{item.tec03}</div>
                    <div className={styles.tec}>{item.tec04}</div>
                    <div className={styles.tec}>{item.tec05}</div>
                </div>
                <div className={styles.linkbox}>
                    <a href={item.link} target="_blank"  rel="noreferrer" className={styles.link}>
                        <img src={item.icon01} className={styles.icon} alt="프로젝트 이미지" />
                        <p className={styles.path}>{item.path01}</p>
                    </a>
                    <a href={item.page} target="_blank"  rel="noreferrer" className={styles.link}>
                        <img src={item.icon02} className={styles.icon} alt="프로젝트 이미지" />
                        <p className={styles.path}>{item.path02}</p>
                    </a>
                </div>
            </div>
        </div>
    );

export default ProjectItem;