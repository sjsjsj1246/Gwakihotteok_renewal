import React, { useState } from 'react';
import EventThumbnail from './event_thumbnail/event_thumbnail';
import styles from './event_list.module.css';
import EventDetail from './event_detail/event_detail';

const EventList = ({ eventId }) => {
  const [events, setEvents] = useState([
    {
      id: 'mirae',
      title: '미래관 커피증정 이벤트',
      explain: '고생했다 과기대학우들! 미래간 커피증정 이벤트',
      date: '2019년 5월 14일 ~ 2019년 6월 8일',
      imageURL: 'https://i.postimg.cc/Kzj9hZWC/Mirae-home.png',
      // imageURL: 'https://i.postimg.cc/7Z1tgt7t/Mirae.png',
    },
    {
      id: 'night',
      title: '밤샘 이벤트',
      explain:
        '밤샘공부를 위해 준비했다. 기말고사의 기적을 위해 준비한 밤샘세트',
      date: '2019년 5월 14일 ~ 2019년 6월 8일',
      imageURL: 'https://i.postimg.cc/9z519yfj/Night-home.png',
      // imageURL: 'https://i.postimg.cc/Y0mbjdM3/Night.png',
    },
    {
      id: 'lucky',
      title: '100번째 손님을 노려라!',
      explain: '행운의 100번째! 100번째 손님을 노려라!',
      date: '상시 이벤트',
      imageURL: 'https://i.postimg.cc/K8LSC5Tt/Lucky100.png',
    },
  ]);
  return (
    <div className={styles.container}>
      {eventId === 'main' ? (
        <div className={styles.main}>
          <h1>전체 이벤트</h1>
          {events.map((event) => (
            <EventThumbnail event={event} />
          ))}
        </div>
      ) : (
        <div>
          {events.map(
            (item) => item.id === eventId && <EventDetail event={item} />,
          )}
        </div>
      )}
    </div>
  );
};

export default EventList;
