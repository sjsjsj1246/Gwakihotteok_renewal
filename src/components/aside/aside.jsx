import React from 'react';
import styles from './aside.module.css';

const Aside = (props) => {
  return (
    <aside className={styles.aside}>
      <img
        src="https://i.postimg.cc/GmnSTnBs/Side-bar.png"
        alt="사이드바"
        useMap="#aside_map"
      />
      <map name="aside_map">
        <area
          shape="rect"
          coords="27,73,224,163"
          href="https://www.facebook.com/"
          target="_blank"
          alt="페이스북"
        />
        <area
          shape="rect"
          coords="27,163,224,248"
          href="https://www.instagram.com/?hl=ko"
          target="_blank"
          alt="인스타"
        />
        <area
          shape="rect"
          coords="27,249,224,333"
          href="https://www.kakaocorp.com/service/KakaoTalk"
          target="_blank"
          alt="카톡플친"
        />
        <area
          shape="rect"
          coords="27,334,224,418"
          href="franchisee.html"
          target="_parent"
          alt="가맹점 모집"
        />
        <area
          shape="rect"
          coords="27,419,224,525"
          href="alba.html"
          target="_parent"
          alt="알바 모집"
        />
      </map>
    </aside>
  );
};

export default Aside;
