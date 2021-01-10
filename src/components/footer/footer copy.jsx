import React from 'react';
import './footer.css';

const Footer = (props) => {
  return (
    <div className="Footer">
      <div className="lnb">
        <hr />
        <br />
        <ul>
          <li>
            <a href="intro.html" target="_parent">
              회사 소개
            </a>
          </li>
          <li>
            <a href="membership.html" target="_parent">
              제휴카드
            </a>
          </li>
          <li>
            <a href="terms.html" target="_parent">
              이용약관
            </a>
          </li>
        </ul>
      </div>
      <div className="info">
        <p>
          (12345)서울특별시 노원구 공릉동 공릉로 232 TEL : 1577-2222
          <br />
          고객지원센터 070-123-456 (고객불편사항 등) 사업자번호 : 106-81-123456
          (대표자 김재수)
        </p>
        <br />
        <p className="copy-right">
          COPYRIGHT© 2019 과기호떡 ALL RIGHT RESERVED
        </p>
      </div>
    </div>
  );
};

export default Footer;
