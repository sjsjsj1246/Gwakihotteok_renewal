import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import Menu from './menu/menu';
import EventList from './event_list/event_list';
import OnlineOrder from './online_order/online_order';
import FindStore from './find_store/find_store';
import styles from './content.module.css';

const Article = ({ location }) => {
  const [frame, setFrame] = useState({
    menu: {
      id: 'menu',
      imgURL: 'https://i.postimg.cc/NMjnG8KJ/Menu-Introduce-2.png',
      title: '메뉴',
      explain: '',
    },
    event: {
      id: 'event',
      imgURL: 'https://i.postimg.cc/fWgGLPjx/Event.png',
      title: '진행중인 이벤트',
      explain: '과기호떡의 이벤트 내용을 안내해드립니다.',
    },
    onlineOrder: {
      id: 'onlineOrder',
      imgURL: 'https://i.postimg.cc/GpqMfBXk/Online.png',
      title: '온라인 주문',
      explain: '',
    },
    findStore: {
      id: 'findStore',
      imgURL: 'https://i.postimg.cc/HL2KCvk8/Find.png',
      title: '매장 찾기',
      explain: '',
    },
  });
  const [query, setQuery] = useState({
    id: 'menu',
    menuId: 'mainMenu',
    eventId: 'mirae',
  });

  useEffect(() => {
    setQuery(queryString.parse(location.search));
    console.log(query);
  }, [location]);

  return (
    <section className={styles.container}>
      <img
        className={styles.titleImg}
        src={frame[`${query.id}`].imgURL}
        alt="타이틀"
      />
      <h1 className={styles.title}>{frame[`${query.id}`].title}</h1>
      {frame[`${query.id}`].explain && (
        <p className={styles.explain}>{frame[`${query.id}`].explain}</p>
      )}
      <hr className={styles.topHr} />
      {(() => {
        switch (frame[`${query.id}`].id) {
          case 'menu':
            return <Menu menuId={query.menuId} />;
          case 'event':
            return <EventList eventId={query.eventId} />;
          case 'onlineOrder':
            return <OnlineOrder />;
          case 'findStore':
            return <FindStore />;
          default:
            return Error('잘못된 접근입니다.');
        }
      })()}
      <hr className={styles.bottomHr} />
    </section>
  );
};

export default Article;
