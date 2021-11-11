import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import styles from './footer.module.css';

library.add(fab, fas);
const Footer = () => (
        <footer className={styles.footer}>
            <p href="" className={styles.logo}>
                Jun .
            </p>
            <ul className={styles.link}>
                <li>
                    <a href="https://github.com/hursh7" target="_blank"  rel="noreferrer">
                        <FontAwesomeIcon icon={["fab", "github"]} />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/hursh7" target="_blank"  rel="noreferrer">
                        <FontAwesomeIcon icon={["fas", "comment-dots"]} />
                    </a>
                </li>
                <li>
                    <a href="mailto:junhp1994@gmail.com" target="_blank"  rel="noreferrer">
                        <FontAwesomeIcon icon={["fab", "google"]} />
                    </a>
                </li>
                <li>
                    <a href="mailto:junhp1994@gmail.com" target="_blank"  rel="noreferrer">
                        <FontAwesomeIcon icon={["fas", "id-badge"]} />
                    </a>
                </li>
            </ul>
            <ul className={styles.text}>
                <li>본 사이트는 상업적 목적이 아닌 개인 포트폴리오 사이트로 제작되었습니다.</li>
                <li>사용된 일부 이미지 및 폰트 등은 별도의 출처가 있음을 밝힙니다.</li>
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
            <p className={styles.copyright}>&copy; 2021 Junhyung Park. All rights reserved.</p>
        </footer>    
    );

export default Footer;