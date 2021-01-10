import React from 'react';

const EventItem = ({ event }) => {
  const { id, title, explain, date, imageURL } = event;
  return (
    <div>
      <div>
        <img src="images/UI/Event.png" alt="이벤트" />
        <h1>진행중인 이벤트</h1>
        <p>과기호떡의 이벤트 내용을 안내해드립니다.</p>
      </div>

      <section>
        <div>
          <p>{title}</p>
          <p>{date}</p>
        </div>
        <div>
          <img src={imageURL} alt="이벤트페이지" />
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default EventItem;
