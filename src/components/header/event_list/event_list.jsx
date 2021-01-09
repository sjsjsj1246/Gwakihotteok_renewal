import React, { useState } from 'react';
import EventThumbnail from './event_thumbnail/event_thumbnail';

const EventList = (props) => {
  const [events, setEvents] = useState([
    {
      id: 'mirae',
      title: '고생했다. 과기대학우들! 미래관 커피증정 이벤트',
      explain:
        '밤샘공부를 위해 준비했다. 기말고사의 기적을 위해 준비한 밤샘세트',
      date: '2019년 5월 14일 ~ 2019년 6월 8일',
      imageURL: 'images/Poster/Mirae.png',
    },
  ]);
  return events.map((event) => <EventThumbnail event={event} />);
};

export default EventList;
