import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../service/header';
import styles from './header.module.css';

const Header = (props) => {
  return (
    <header>
      <Link to="/" className={styles.logo}>
        <img src="https://i.postimg.cc/vZj7xW22/image.png" alt="로고" />
      </Link>
      <div className={styles.navbar}>
        <div className={styles.dropdown}>
          <Link
            to="/article?id=menu&menuId=mainMenu"
            className={styles.dropbtn}
          >
            메뉴
          </Link>
          <div className={styles.dropdownList}>
            <Link
              to="/article?id=menu&menuId=mainMenu"
              className={styles.dropdownItem}
            >
              주 메뉴
            </Link>
            <Link
              to="/article?id=menu&menuId=sideMenu"
              className={styles.dropdownItem}
            >
              사이드 메뉴
            </Link>
            <Link
              to="/article?id=menu&menuId=setMenu"
              className={styles.dropdownItem}
            >
              특가 세트
            </Link>
          </div>
        </div>

        <div className={styles.dropdown}>
          <Link to="/article?id=event&eventId=main" className={styles.dropbtn}>
            이벤트
          </Link>
          <div className={styles.dropdownList}>
            <Link
              to="/article?id=event&eventId=mirae"
              className={styles.dropdownItem}
            >
              미래관 이벤트
            </Link>
            <Link
              to="/article?id=event&eventId=night"
              className={styles.dropdownItem}
            >
              밤샘 이벤트
            </Link>
            <Link
              to="/article?id=event&eventId=lucky"
              className={styles.dropdownItem}
            >
              행운의 100! 이벤트
            </Link>
          </div>
        </div>
        <div className={styles.dropdown}>
          <Link to="/article?id=onlineOrder" className={styles.dropbtn}>
            온라인 주문
          </Link>
        </div>
        <div className={styles.dropdown}>
          <Link to="/article?id=findStore" className={styles.dropbtn}>
            매장찾기
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
