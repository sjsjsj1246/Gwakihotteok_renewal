import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import Menu from './menu/menu';
import EventList from './event_list/event_list';
import OnlineOrder from './online_order/online_order';
import FindStore from './find_store/find_store';

const Article = ({ location, match }) => {
  const [frame, setFrame] = useState({
    menu: {
      id: 'menu',
      imgURL: 'images/UI/Menu_Introduce_2.png',
      title: '메뉴',
      explain: '',
    },
    event: {
      id: 'event',
      imgURL: 'images/UI/Event.png',
      title: '진행중인 이벤트',
      explain: '과기호떡의 이벤트 내용을 안내해드립니다.',
    },
    onlineOrder: {
      id: 'onlineOrder',
      imgURL: 'images/UI/Online.png',
      title: '온라인 주문',
      explain: '',
    },
    findStore: {
      id: 'findStore',
      imgURL: 'images/UI/Find.png',
      title: '매장 찾기',
      explain: '',
    },
  });
  const [query, setQuery] = useState({ id: 'menu', menuId: 'mainMenu' });

  useEffect(() => {
    setQuery(queryString.parse(location.search));
  }, [location]);

  return (
    <section>
      <img src={frame[`${query.id}`].imgURL} alt="타이틀" />
      <h1>{frame[`${query.id}`].title}</h1>
      <hr />
      {(() => {
        switch (frame[`${query.id}`].id) {
          case 'menu':
            return <Menu menuId={query.menuId} />;
          case 'event':
            return <EventList />;
          case 'onlineOrder':
            return <OnlineOrder />;
          case 'findStore':
            return <FindStore />;
          default:
            return Error('잘못된 접근입니다.');
        }
      })()}
      <hr />
    </section>
  );
};

export default Article;
