import React from 'react';
import { Link } from 'react-router-dom';
import styles from './footer.module.css';

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.lnb}>
        <Link className={styles.link} to="/content?id=intro">
          회사소개
        </Link>
        <Link className={styles.link} to="/content?id=membership">
          제휴카드
        </Link>
        <Link className={styles.link} to="/content?id=terms">
          이용약관
        </Link>
      </div>
      <div className={styles.info}>
        <p>
          (12345)서울특별시 노원구 공릉동 공릉로 232 TEL : 1577-2222
          <br />
          고객지원센터 070-123-456 (고객불편사항 등) 사업자번호 : 106-81-123456
          (대표자 김재수)
        </p>
        <p className={styles.copyRight}>
          COPYRIGHT© 2019 과기호떡 ALL RIGHT RESERVED
        </p>
      </div>
    </footer>
  );
};

export default Footer;
