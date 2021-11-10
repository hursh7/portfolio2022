import React, { forwardRef } from 'react';
import styles from './tech.module.css';
import { ReactComponent as IconHtml } from '../../static/images/tech_html.svg';
import { ReactComponent as IconCss } from '../../static/images/tech_css.svg';

const Tech = forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <section className={styles.tech}>
                <h2 className={styles.index}>Skills & Tools</h2>
                <p className={styles.sub}>My Skillset</p>
                <div className={`${styles.container} ${styles.mb}`}>
                    <div className={styles.item}>
                        <div className={styles.icon}>
                            <IconHtml fill="#f16529" className={styles.img} />
                        </div>
                        <p className={styles.title}>Html 5</p>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.icon}>
                            <IconCss fill="#2196f3" className={styles.img} />
                        </div>
                        <p className={styles.title}>CSS 3</p>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.icon}>
                            <img className={styles.img} src={require('../../static/images/tech_js.svg').default} alt="js" />
                        </div>
                        <p className={styles.title}>JavaScript</p>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.icon}>
                            <img className={styles.img} src={require('../../static/images/tech_react.svg').default} alt="react" />
                        </div>
                        <p className={styles.title}>React</p>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.icon}>
                            <img className={styles.img} src={require('../../static/images/tech_postcss.svg').default} alt="postcss" />
                        </div>
                        <p className={styles.title}>PostCSS</p>
                    </div>
                </div>
                <p className={styles.sub}>Tools I use</p>
                <div className={styles.container}>
                    <div className={styles.item}>
                        <div className={styles.icon}>
                            <img className={styles.img} src={require('../../static/images/tech_postman.svg').default} alt="postman" />
                        </div>
                        <p className={styles.title}>Postman</p>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.icon}>
                            <img className={styles.img} src={require('../../static/images/tech_firebase.svg').default} alt="firebase" />
                        </div>
                        <p className={styles.title}>firebase</p>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.icon}>
                            <img className={styles.img} src={require('../../static/images/tech_git.svg').default} alt="git" />
                        </div>
                        <p className={styles.title}>Git & github</p>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.icon}>
                            <img className={styles.img} src={require('../../static/images/tech_ps.svg').default} alt="adobe ps" />
                        </div>
                        <p className={styles.title}>Adobe PS</p>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.icon}>
                            <img className={styles.img} src={require('../../static/images/tech_xd.svg').default} alt="adobe xd" />
                        </div>
                        <p className={styles.title}>Adobe XD</p>
                    </div>
                </div>
            </section> 
        </div>
    )
});

export default Tech;