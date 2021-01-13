# Gwakihotteok_renewal

과기호떡 사이트 리뉴얼입니다.

- 리뉴얼 계획

  - 순수 HTML -> 리액트 라이브러리 사용하여 View 구성
    - react router 사용하여 라우팅
    - redux를 통한 상태관리
    - immer 적용하여 불변성관리
    - typescript 적용하여 에러관리
  - 데이터 서버 연동
    - 메뉴, 매장위치 등의 데이터를 서버에 업로드
    - 임시로 firebase 사용 예정
  - 이미지 서버 연동
    - 각종 이미지 서버에 업로드하여 로딩속도 증가
    - 임시로 postimages.org 사이트 이용
  - 로그인 기능 구현
    - 온라인 주문할때 정보 활용
    - 주문내역 확인
    - 관리자 페이지 만들기
  - 카톡플친 생성, 주문 시 주문내역이 카톡으로
  - 가능하면 결제시스템 구현
    - 카카오페이
    - 신용카드, paypal, mastercard...
  - PWA 만들기
    - 모바일 친화적 환경 구현

- 목적 : 이것저것 다 해보고 배우는 것

- 일정 : 대충 2월까지

- 라이브러리
  - React
    - react-router-dom
      - query-string
    - redux
    - immer
  - PostCSS
