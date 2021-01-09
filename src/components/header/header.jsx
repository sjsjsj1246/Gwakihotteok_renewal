import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../service/header';
import './header.css';

const Header = (props) => {
  const [isHover, setIsHover] = useState([0]);
  const handleHover = () => {
    setIsHover(isHover ? 0 : 1);
  };
  return (
    <div className={`header ${isHover ? 'hover' : ''}`}>
      <div className="logo">
        <a href="/" target="_parent">
          <img src="images/Image_logo/과기호떡로고.png" />{' '}
        </a>
      </div>
      <nav>
        <ul onMouseOver={handleHover} onMouseOut={handleHover}>
          <li>
            <Link to="/menu">메뉴</Link>
            <ul>
              <li>
                <Link to="/">주메뉴</Link>
              </li>
              <li>
                <Link to="/">사이드메뉴</Link>
              </li>
              <li>
                <Link to="/">특가 세트</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="online_order">온라인 주문</Link>
            <ul>
              <li>
                <img
                  src="../image/UI/Online_order.png"
                  alt="온라인주문이미지"
                />{' '}
              </li>
            </ul>
          </li>
          <li>
            <Link to="event">이벤트</Link>
            <ul>
              <li>
                <Link to="/">미래관 이벤트</Link>
              </li>
              <li>
                <Link to="/">밤샘 이벤트</Link>
              </li>
              <li>
                <Link to="/">행운의 100! 이벤트</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="find_store">매장찾기</Link>
            <ul>
              <li>
                <img src="../image/UI/Find_store.png" alt="매장찾기 이미지" />
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
