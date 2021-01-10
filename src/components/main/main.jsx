import React, { Component, useEffect } from 'react';
import './main.css';
import slide from '../../service/imgSlide';

const Main = (props) => {
  useEffect(() => {
    slide();
  });
  return (
    <div className="Main">
      <div id="contents">
        <div className="img_slide">
          <ul>
            <li>
              <img
                src="https://i.postimg.cc/Kzj9hZWC/Mirae-home.png"
                alt="미래관 이벤트"
              />
            </li>
            <li>
              <img
                src="https://i.postimg.cc/9z519yfj/Night-home.png"
                alt="밤샘 이벤트"
              />
            </li>
            <li>
              <img
                src="https://i.postimg.cc/8Cm8zPt5/Lucky100-main.png"
                alt="행운의 100! 이벤트"
              />
            </li>
          </ul>
          <img src="https://i.postimg.cc/rmgLQFrb/blank-image.png" />
        </div>
      </div>
    </div>
  );
};

export default Main;
