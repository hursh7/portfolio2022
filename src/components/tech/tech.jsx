import React from 'react';
import styles from './tech.module.css';

const Tech = (props) => (
        <section className={styles.tech}>
            <h2 className={styles.index}>Skills & Tools</h2>
            <p className={styles.sub}>My Skillset</p>
            <div className={`${styles.container} ${styles.mb}`}>
                <div className={styles.item}>
                    <div className={styles.icon}>
                        <img className={styles.img} src="/images/html.svg" alt="html" />
                    </div>
                    <p className={styles.title}>Html 5</p>
                </div>
                <div className={styles.item}>
                    <div className={styles.icon}>
                        <img className={styles.img} src="/images/css.svg" alt="html" />
                    </div>
                    <p className={styles.title}>CSS 3</p>
                </div>
                <div className={styles.item}>
                    <div className={styles.icon}>
                        <img className={styles.img} src="/images/js.svg" alt="html" />
                    </div>
                    <p className={styles.title}>JavaScript</p>
                </div>
                <div className={styles.item}>
                    <div className={styles.icon}>
                        <img className={styles.img} src="/images/react.svg" alt="html" />
                    </div>
                    <p className={styles.title}>React</p>
                </div>
                <div className={styles.item}>
                    <div className={styles.icon}>
                        <img className={styles.img} src="/images/postcss.svg" alt="html" />
                    </div>
                    <p className={styles.title}>PostCSS</p>
                </div>
                
            </div>
            <p className={styles.sub}>Tools I use</p>
            <div className={styles.container}>
                <div className={styles.item}>
                    <div className={styles.icon}>
                        <img className={styles.img} src="/images/postman.svg" alt="html" />
                    </div>
                    <p className={styles.title}>Postman</p>
                </div>
                <div className={styles.item}>
                    <div className={styles.icon}>
                        <img className={styles.img} src="/images/firebase.svg" alt="html" />
                    </div>
                    <p className={styles.title}>firebase</p>
                </div>
                <div className={styles.item}>
                    <div className={styles.icon}>
                        <img className={styles.img} src="/images/git.svg" alt="html" />
                    </div>
                    <p className={styles.title}>Git & github</p>
                </div>
                <div className={styles.item}>
                    <div className={styles.icon}>
                        <img className={styles.img} src="/images/ps.svg" alt="html" />
                    </div>
                    <p className={styles.title}>Adobe PS</p>
                </div>
                <div className={styles.item}>
                    <div className={styles.icon}>
                        <img className={styles.img} src="/images/xd.svg" alt="html" />
                    </div>
                    <p className={styles.title}>Adobe XD</p>
                </div>
            </div>
        </section> 
    );

export default Tech;