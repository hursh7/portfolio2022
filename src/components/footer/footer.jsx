import React from 'react';
import styles from './footer.module.css';

const Footer = () => (
        <footer className={styles.footer}>
            <ul className={styles.copyright}>
                <li>본 사이트는 상업적 목적이 아닌 개인 포트폴리오 사이트로 제작되었습니다. 사용된 일부 이미지 및 폰트 등은 별도의 출처가 있음을 밝힙니다.</li>
                <li>Copyright2021. Junhyung Park. All rights reserved.</li>
            </ul>
            <div className={styles.ref}>
                <a href="https://iconape.com/" target="_blank"  rel="noreferrer" className={styles.link}>
                    <img src={require('../../static/images/footer_ape.svg').default} alt="iconape" />
                </a>
                <a href="https://www.flaticon.com/" target="_blank"  rel="noreferrer" className={styles.link}>
                    <img src={require('../../static/images/footer_fla.svg').default} alt="flaticon" />
                </a>
                <a href="https://www.freepik.com/" target="_blank"  rel="noreferrer" className={styles.link}>
                    <img src={require('../../static/images/footer_freepik.svg').default} alt="freepik" />
                </a>
            </div>
        </footer>    
    );

export default Footer;