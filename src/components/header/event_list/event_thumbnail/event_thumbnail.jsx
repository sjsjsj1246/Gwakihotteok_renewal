import React from 'react';

const EventThumbnail = ({ event }) => {
  const { id, title, date, explain, imageURL } = event;
  return (
    <div>
      <img src={imageURL} alt="이벤트" />
      <dl>
        <dt>{title}</dt>
        <img src="images/ETC/img_icon_off_line.gif" alt="오프라인" />
        <dd>{date}</dd>
      </dl>
    </div>
  );
};

export default EventThumbnail;
