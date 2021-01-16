import React, { useEffect, useState } from 'react';
import styles from './menu.module.css';

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const Menu = ({ menuId, gwakihotteokData }) => {
  const [menuData, setMenuData] = useState({});

  useEffect(() => {
    const stopSync = gwakihotteokData.syncMenuData((menuData) => {
      setMenuData(menuData);
    });
    return () => stopSync();
  }, [gwakihotteokData]);

  return (
    <div className={styles.container}>
      {Object.keys(menuData[menuId].menuList).map((menuKey) => {
        const menu = menuData[menuId].menuList[menuKey];
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
                    <img
                      className={styles.itemImg}
                      src={item.imgURL}
                      alt={item.id}
                    />
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
      })}
    </div>
  );
};

export default Menu;
