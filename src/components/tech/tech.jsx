import React from 'react';
import styles from './tech.module.css';

const Tech = (props) => (
        <section className={styles.tech}>
            <h2 className={styles.index}>Skills & Tools</h2>
            <div className={styles.container}>
                <div className={styles.item}>
                    <img className={styles.icon} src="/images/html.svg" alt="html" />
                    <p className={styles.title}>Html 5</p>
                </div>
                <div className={styles.item}>
                    <img className={styles.icon} src="/images/css.svg" alt="html" />
                    <p className={styles.title}>CSS 3</p>
                </div>
                <div className={styles.item}>
                    <img className={styles.icon} src="/images/js.svg" alt="html" />
                    <p className={styles.title}>JavaScript</p>
                </div>
                <div className={styles.item}>
                    <img className={styles.icon} src="/images/postman.svg" alt="html" />
                    <p className={styles.title}>Postman</p>
                </div>
                <div className={styles.item}>
                    <img className={styles.icon} src="/images/xd.svg" alt="html" />
                    <p className={styles.title}>Adobe XD</p>
                </div>
                <div className={styles.item}>
                    <img className={styles.icon} src="/images/ps.svg" alt="html" />
                    <p className={styles.title}>Adobe PS</p>
                </div>
                <div className={styles.item}>
                    <img className={styles.icon} src="/images/react.svg" alt="html" />
                    <p className={styles.title}>React</p>
                </div>
                <div className={styles.item}>
                    <img className={styles.icon} src="/images/postcss.svg" alt="html" />
                    <p className={styles.title}>PostCSS</p>
                </div>
                <div className={styles.item}>
                    <img className={styles.icon} src="/images/git.svg" alt="html" />
                    <p className={styles.title}>Git & github</p>
                </div>
            </div>
        </section> 
    );

export default Tech;