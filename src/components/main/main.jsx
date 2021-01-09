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
              <img src="images/Poster/Mirae_home.png" alt="미래관 이벤트" />
            </li>
            <li>
              <img src="images/Poster/Night_home.png" alt="밤샘 이벤트" />
            </li>
            <li>
              <img
                src="images/Poster/Lucky100_main.png"
                alt="행운의 100! 이벤트"
              />
            </li>
          </ul>
          <img src="images/Poster/blank_image.png" />
        </div>
      </div>
    </div>
  );
};

export default Main;
