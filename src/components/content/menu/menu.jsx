import React from 'react';
import styles from './menu.module.css';

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const Menu = ({ menuId }) => {
  const menuData = {
    mainMenu: {
      id: 'mainMenu',
      title: '주 메뉴',
      basicMenu: {
        id: 'basicMenu',
        title: '기본 메뉴',
        item: {
          honey: {
            id: 'honey',
            title: '기본 메뉴',
            imgURL: 'https://i.postimg.cc/kMfbtQBN/Honey.png',
            title: '꿀 호떡',
            price: 1500,
            popular: false,
          },
          appleJam: {
            id: 'appleJam',
            imgURL: 'https://i.postimg.cc/LsLPqG1h/AppleJam.png',
            title: '사과 잼 호떡',
            price: 1500,
            popular: false,
          },
        },
      },
      specialMenu: {
        id: 'specialMenu',
        title: '스페셜 메뉴',
        item: {
          wellbeing: {
            id: 'wellbeing',
            imgURL: 'https://i.postimg.cc/HsN86T0V/Wellbeing.png',
            title: '웰빙 호떡',
            price: 2000,
            popular: true,
          },
          nutella: {
            id: 'nutella',
            imgURL: 'https://i.postimg.cc/Hns8hxP7/Nutella.png',
            title: '누텔라 호떡',
            price: 2000,
            popular: false,
          },
          caramel: {
            id: 'caramell',
            imgURL: 'https://i.postimg.cc/pTBnC8kH/Caramel.png',
            title: '카라멜 호떡',
            price: 1700,
            popular: false,
          },
          seed: {
            id: 'seed',
            imgURL: 'https://i.postimg.cc/SNRzLnMB/Seed.png',
            title: '씨앗 호떡',
            price: 2000,
            popular: true,
          },
          cheese: {
            id: 'cheese',
            imgURL: 'https://i.postimg.cc/B63K2NTp/Cheese.png',
            title: '치즈 호떡',
            price: 2000,
            popular: false,
          },
          tteok: {
            id: 'tteok',
            imgURL: 'https://i.postimg.cc/cC9tySVk/Tteok.png',
            title: '떡 호떡',
            price: 2500,
            popular: false,
          },
        },
      },
    },
    sideMenu: {
      id: 'sideMenu',
      title: '사이드 메뉴',
      drink: {
        id: 'drink',
        title: '음료',
        item: {
          americano: {
            id: 'americano',
            imgURL: 'https://i.postimg.cc/XJK9Ptjt/Americano.png',
            title: '아메리카노',
            price: 1500,
            popular: false,
          },
          cafeLatte: {
            id: 'cafeLatte',
            imgURL: 'https://i.postimg.cc/0jcDkmJf/Cafelatte.png',
            title: '카페라떼',
            price: 1500,
            popular: false,
          },
          capuccino: {
            id: 'capuccino',
            imgURL: 'https://i.postimg.cc/593wSckC/Capuccino.png',
            title: '카푸치노',
            price: 1500,
            popular: false,
          },
          milk: {
            id: 'milk',
            imgURL: 'https://i.postimg.cc/9Q4Z2DXd/Milk.png',
            title: '우유',
            price: 1500,
            popular: false,
          },
          orangeJuice: {
            id: 'orangeJuice',
            imgURL: 'https://i.postimg.cc/Vk3Mkz53/Orangejuice.png',
            title: '오렌지주스',
            price: 1500,
            popular: false,
          },
        },
      },
      sideMenu: {
        id: 'sideMenu',
        title: '사이드 메뉴',
        item: {
          ggochi: {
            id: 'ggochi',
            imgURL: 'https://i.postimg.cc/T3WLSBQQ/Ggochi.png',
            title: '호떡꼬치',
            price: 2000,
            popular: true,
          },
          miniBall: {
            id: 'miniBall',
            imgURL: 'https://i.postimg.cc/pdbhtk6v/Miniball.png',
            title: '미니호떡치즈볼',
            price: 1500,
            popular: false,
          },
        },
      },
    },
    setMenu: {
      id: 'setMenu',
      title: '세트 메뉴',
      setMenu: {
        id: 'setMenu',
        title: '세트 메뉴',
        item: {
          goodMorning: {
            id: 'goodMorning',
            imgURL: 'https://i.postimg.cc/RhFqTYN7/Goodmorning.png',
            title: '굿모닝 세트',
            price: 2300,
            popular: false,
          },
          bamsem: {
            id: 'bamsem',
            imgURL: 'https://i.postimg.cc/zfCLDWsg/Bamsem.png',
            title: '밤샘 세트',
            price: 2700,
            popular: false,
          },
          elvis: {
            id: 'elvis',
            imgURL: 'https://i.postimg.cc/TwQpgxY2/Elvis.png',
            title: '엘비스 세트',
            price: 3600,
            popular: false,
          },
          presley: {
            id: 'presley',
            imgURL: 'https://i.postimg.cc/7hWhtN2p/Presley.png',
            title: '프레슬리 세트',
            price: 4000,
            popular: false,
          },
          jaesoo: {
            id: 'jaesoo',
            imgURL: 'https://i.postimg.cc/qBbN7p5j/Jaesoo.png',
            title: '재수 좋은 날 세트',
            price: 3500,
            popular: true,
          },
        },
      },
    },
  };
  return (
    <div className={styles.container}>
      {Object.keys(menuData[menuId]).map((menuKey) => {
        if (menuKey !== 'id' && menuKey !== 'title') {
          const menu = menuData[menuId][menuKey];
          return (
            <div key={menu.id} className={styles.menulist}>
              <div className={styles.title}>
                <img
                  src="https://i.postimg.cc/c1Mckt66/Mini-icon.png"
                  alt="logo"
                />
                {menu.title}
              </div>
              <div className={styles.menu}>
                {Object.keys(menu.item).map((itemKey) => {
                  const item = menu.item[itemKey];
                  return (
                    <div key={item.id} className={styles.item}>
                      <img src={item.imgURL} alt={item.id} />
                      <div className={styles.explain}>
                        <div>
                          {item.popular && (
                            <img
                              className={styles.hot}
                              src="https://i.postimg.cc/fTzfGW0C/HOT.png"
                              alt="Hot"
                            />
                          )}
                          {item.title}
                        </div>
                        <div>
                          <img
                            src="https://i.postimg.cc/5NsSbcBV/Money.png"
                            alt="Won"
                          />
                          {item.price}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Menu;
