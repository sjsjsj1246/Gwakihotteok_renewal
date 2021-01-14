import React, { useState } from 'react';
import styles from './main.module.css';
import useInterval from '../../service/useInterval';

const Main = (props) => {
  const imgList = [
    {
      id: 'mirae',
      index: 0,
      title: '미래관 이벤트',
      imgURL: 'https://i.postimg.cc/Kzj9hZWC/Mirae-home.png',
    },
    {
      id: 'night',
      index: 1,
      title: '밤샘 이벤트',
      imgURL: 'https://i.postimg.cc/9z519yfj/Night-home.png',
    },
    {
      id: 'lucky',
      index: 2,
      title: '행운의 100! 이벤트',
      imgURL: 'https://i.postimg.cc/8Cm8zPt5/Lucky100-main.png',
    },
  ];
  const [index, setIndex] = useState(0);
  useInterval(() => {
    setIndex((index + 1) % imgList.length);
    console.log(index);
  }, 5000);

  return (
    <div className={styles.imgSlide}>
      {imgList.map((item) => (
        <img
          className={`${styles.slideItem} ${
            index === item.index ? styles.show : ''
          }`}
          src={item.imgURL}
          alt={item.title}
        />
      ))}
      <img
        style={{ width: '100%', height: 'auto' }}
        src="https://i.postimg.cc/rmgLQFrb/blank-image.png"
        alt="padding"
      />
    </div>
  );
};

export default Main;
