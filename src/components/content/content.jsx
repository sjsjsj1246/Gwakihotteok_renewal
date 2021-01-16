import React from 'react';
import queryString from 'query-string';
import Menu from './menu/menu';
import EventList from './event_list/event_list';
import OnlineOrder from './online_order/online_order';
import FindStore from './find_store/find_store';
import styles from './content.module.css';
import { useLocation } from 'react-router-dom';
import Intro from './intro/intro';
import Terms from './terms/terms';
import Membership from './membership/membership';
import Aside from '../aside/aside';

const Content = ({ gwakihotteokData }) => {
  const location = useLocation();
  const { id, eventId, menuId } = queryString.parse(location.search);
  const frame = {
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
    intro: {
      id: 'intro',
      imgURL: '',
      title: '회사소개',
      explain: '과기호떡의 회사 소개를 확인해보세요',
    },
    membership: {
      id: 'findStore',
      imgURL: '',
      title: '제휴카드',
      explain: '과기호떡의 제휴카드를 확인해보세요',
    },
    terms: {
      id: 'findStore',
      imgURL: '',
      title: '이용약관',
      explain: '과기호떠의 이용약관을 확인해보세요',
    },
  };

  return (
    <section className={styles.section}>
      {frame[id].imgURL !== '' && (
        <img className={styles.titleImg} src={frame[id].imgURL} alt="타이틀" />
      )}
      <h1 className={styles.title}>{frame[id].title}</h1>
      {frame[id].explain && (
        <p className={styles.explain}>{frame[id].explain}</p>
      )}
      <hr className={styles.topHr} />
      <div className={styles.content}>
        {(() => {
          switch (frame[id].id) {
            case 'menu':
              return (
                <Menu menuId={menuId} gwakihotteokData={gwakihotteokData} />
              );
            case 'event':
              return <EventList eventId={eventId} />;
            case 'onlineOrder':
              return <OnlineOrder />;
            case 'findStore':
              return <FindStore />;
            case 'intro':
              return <Intro />;
            case 'membership':
              return <Membership />;
            case 'terms':
              return <Terms />;
            default:
              return Error('잘못된 접근입니다.');
          }
        })()}
        <Aside />
      </div>
      <hr className={styles.bottomHr} />
    </section>
  );
};

export default Content;
