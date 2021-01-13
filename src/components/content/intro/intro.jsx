import React from 'react';
import styles from './intro.module.css';

const Intro = (props) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src="https://avatars2.githubusercontent.com/u/24623403?s=460&u=3be547107d6fe5378f1fc91368006cbbdde0653e&v=4"
        alt="ceo"
      />
      <h1 className={styles.title}>대표 : 황인서</h1>
      <p className={styles.button}>회사소개</p>
      <p className={styles.buttonExplain}>
        회사소개를 클릭하시면 해당내용이 보여집니다.
      </p>
      <div className={styles.explain}>
        <img
          className={styles.img}
          src="https://avatars2.githubusercontent.com/u/24623403?s=460&u=3be547107d6fe5378f1fc91368006cbbdde0653e&v=4"
          alt="ceo"
        />
        <h1>대표 : 황인서</h1>
        <h2>안녕하십니까 과기호떡 대표 황인서입니다.</h2>
        <p>
          서울과학기술대학교 프랜차이즈 브랜드 과기호떡은
          <br />
          학우들의 간단한 한 끼 해결을 위해 만들어졌습니다.
          <br />
        </p>
        <p>
          저희는 학우여러분들에게 약속드립니다. <br />
          하나, 오직 학우여러분들의 편에서 판매하겠습니다. <br />
          둘, 합리적인 가격과 서비스를 제공하겠습니다. <br />
          셋, 서울과학기술대학교의 대표브랜드로 나아가겠습니다.
        </p>
      </div>
    </div>
  );
};

export default Intro;
