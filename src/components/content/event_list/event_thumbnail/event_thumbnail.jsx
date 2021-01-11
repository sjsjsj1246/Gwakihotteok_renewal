import React from 'react';
import { Link } from 'react-router-dom';
import styles from './event_thumbnail.module.css';

const EventThumbnail = ({ event }) => {
  const { id, title, date, explain, imageURL, thumbnailURL } = event;
  return (
    <Link className={styles.thumbnail} to={`/article?id=event&eventId=${id}`}>
      <img className={styles.thumbnailImg} src={thumbnailURL} alt="이벤트" />
      <div className={styles.explain}>
        <div className={styles.title}>
          {title}
          <img
            src="https://i.postimg.cc/pXJ1j1KG/img-icon-off-line.gif"
            alt="오프라인"
          />
        </div>
        <div className={styles.date}>{date}</div>
      </div>
    </Link>
  );
};

export default EventThumbnail;
