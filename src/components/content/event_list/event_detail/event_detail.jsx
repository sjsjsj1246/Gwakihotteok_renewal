import React from 'react';
import { Link } from 'react-router-dom';
import styles from './event_detail.module.css';

const EventDetail = ({ event, before, next }) => {
  const { id, title, date, explain, imageURL } = event;
  return (
    <div className={styles.event}>
      <div className={styles.title}>
        <div className={styles.titleName}>
          <h1 className={styles.titleH1}>{title}</h1>
          <p className={styles.titleExplain}>{explain}</p>
        </div>
        <p className={styles.titleDate}>{date}</p>
      </div>
      <img className={styles.eventImg} src={imageURL} alt="이벤트" />
      <div className={styles.bottom}>
        {before && (
          <div className={styles.move}>
            <Link
              className={styles.moveName}
              to={`/article?id=event&eventId=${before.id}`}
            >
              <p className={styles.moveBtn}>이전 글</p>
              <p className={styles.moveTitle}>{before.title}</p>
            </Link>
            <p className={styles.moveDate}>{before.date}</p>
          </div>
        )}
        {next && (
          <div className={styles.move}>
            <Link
              className={styles.moveName}
              to={`/article?id=event&eventId=${next.id}`}
            >
              <p className={styles.moveBtn}>다음 글</p>
              <p className={styles.moveTitle}>{next.title}</p>
            </Link>
            <p className={styles.moveDate}>{next.date}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDetail;
