import React, { useState } from 'react';
import styles from './menu.module.css';

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const Menu = ({ menuId }) => {
  const [menuData, setMenuData] = useState({
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
            imgURL: 'images/Menu/Main/Honey.png',
            title: '꿀 호떡',
            price: 1500,
            popular: false,
          },
          appleJam: {
            id: 'honey',
            imgURL: 'images/Menu/Main/AppleJam.png',
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
            imgURL: 'images/Menu/Main/Wellbeing.png',
            title: '웰빙 호떡',
            price: 2000,
            popular: true,
          },
          nutella: {
            id: 'appleJam',
            imgURL: 'images/Menu/Main/Nutella.png',
            title: '누텔라 호떡',
            price: 2000,
            popular: false,
          },
          caramel: {
            id: 'caramell',
            imgURL: 'images/Menu/Main/Caramel.png',
            title: '카라멜 호떡',
            price: 1700,
            popular: false,
          },
          seed: {
            id: 'seed',
            imgURL: 'images/Menu/Main/Seed.png',
            title: '씨앗 호떡',
            price: 2000,
            popular: true,
          },
          cheese: {
            id: 'cheese',
            imgURL: 'images/Menu/Main/Cheese.png',
            title: '치즈 호떡',
            price: 2000,
            popular: false,
          },
          tteok: {
            id: 'tteok',
            imgURL: 'images/Menu/Main/Tteok.png',
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
            imgURL: 'images/Menu/Drink/Americano.png',
            title: '아메리카노',
            price: 1500,
            popular: false,
          },
          cafeLatte: {
            id: 'cafeLatte',
            imgURL: 'images/Menu/Drink/Cafelatte.png',
            title: '아메리카노',
            price: 1500,
            popular: false,
          },
          capuccino: {
            id: 'capuccino',
            imgURL: 'images/Menu/Drink/Capuccino.png',
            title: '아메리카노',
            price: 1500,
            popular: false,
          },
          milk: {
            id: 'milk',
            imgURL: 'images/Menu/Drink/Milk.png',
            title: '아메리카노',
            price: 1500,
            popular: false,
          },
          orangeJuice: {
            id: 'orangeJuice',
            imgURL: 'images/Menu/Drink/Orangejuice.png',
            title: '아메리카노',
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
            imgURL: 'images/Menu/Side/Ggochi.png',
            title: '호떡꼬치',
            price: 2000,
            popular: true,
          },
          miniBall: {
            id: 'miniBall',
            imgURL: 'images/Menu/Side/Miniball.png',
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
            imgURL: 'images/Menu/Set/Goodmorning.png',
            title: '굿모닝 세트',
            price: 2300,
            popular: false,
          },
          bamsem: {
            id: 'bamsem',
            imgURL: 'images/Menu/Set/Bamsem.png',
            title: '밤샘 세트',
            price: 2700,
            popular: false,
          },
          elvis: {
            id: 'elvis',
            imgURL: 'images/Menu/Set/Elvis.png',
            title: '엘비스 세트',
            price: 3600,
            popular: false,
          },
          presley: {
            id: 'presley',
            imgURL: 'images/Menu/Set/Presley.png',
            title: '프레슬리 세트',
            price: 4000,
            popular: false,
          },
          jaesoo: {
            id: 'jaesoo',
            imgURL: 'images/Menu/Set/Jaesoo.png',
            title: '재수 좋은 날 세트',
            price: 3500,
            popular: true,
          },
        },
      },
    },
  });
  return Object.keys(menuData[menuId]).map((menuKey) => {
    if (menuKey !== 'id' && menuKey !== 'title') {
      const menu = menuData[menuId][menuKey];
      return (
        <div className={styles.container}>
          <div className={styles.title}>
            <img src="images/Image_logo/Mini_icon.png" alt="logo" />
            {menu.title}
          </div>
          <div className={styles.menu}>
            {Object.keys(menu.item).map((itemKey) => {
              const item = menu.item[itemKey];
              return (
                <div className={styles.item}>
                  <img src={item.imgURL} alt={item.id} />
                  <div className={styles.explain}>
                    <div>
                      {item.popular && (
                        <img
                          className={styles.hot}
                          src="images/Image_logo/HOT.png"
                          alt="HOT"
                        />
                      )}
                      {item.title}
                    </div>
                    <div>
                      <img src="images/Image_logo/Money.png" />
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
  });
  // return menuData[menuId].map((menu) => {
  //   menu.map((detailMenu) => {
  //     <h1>{detailMenu.title}</h1>;
  //     detailMenu.map((item) => {
  //       <div className={styles.hotteok}>
  //         <img src={item.imgURL} alt={item.id} />
  //         <div>
  //           {item.popular && <img src="images/Image_logo/HOT.png" />}
  //           <p>{item.title}</p>
  //           <p>{item.price.toLocaleString() + '원'}</p>
  //         </div>
  //       </div>;
  //     });
  //   });
  // });
};

export default Menu;
