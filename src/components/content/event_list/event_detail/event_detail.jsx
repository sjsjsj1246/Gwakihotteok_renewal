import React from 'react';
import styles from './event_detail.module.css';

const EventDetail = ({ event }) => {
  const { id, title, date, explain, imageURL } = event;
  return (
    <div>
      <h1>{title}</h1>
      <img src={imageURL} alt="이벤트" />
    </div>
  );
};

export default EventDetail;
