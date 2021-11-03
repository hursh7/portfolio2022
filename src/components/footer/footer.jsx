import React from 'react';
import styles from './footer.module.css';

const Footer = (props) => (
        <footer className={styles.footer}>
            <ul className={styles.copyright}>
                <li>Copyright2021. Junhyung Park. All rights reserved.</li>
                <li>본 사이트는 상업적 목적이 아닌 개인 포트폴리오 사이트로 제작되었습니다.</li>
                <li>사용된 일부 이미지 및 폰트 등은 별도의 출처가 있음을 밝힙니다.</li>
            </ul>
            <div className={styles.ref}>
                <span>by</span>
                <img className={styles.img} src="/images/footer_ref_ape.svg" alt="iconape" />
                <img className={styles.img} src="/images/footer_ref_flaticon.svg" alt="flaticon" />
            </div>
        </footer>    
    );

export default Footer;