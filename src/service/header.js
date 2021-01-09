
//메뉴 hover할 때 배경색 변화시키기

function over() {
    document.querySelector('body').style.cssText = `background-color:rgb(250, 250, 250)`;
}

function out() {
    document.querySelector('body').style.cssText = `background-color:rgba(255, 255, 255, 0)`;
}