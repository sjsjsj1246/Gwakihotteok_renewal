var menu_name = ["","꿀 호떡","사과 잼 호떡","웰빙 호떡","누텔라 호떡","카라멜 호떡","씨앗 호떡","치즈 호떡","떡 호떡","아메리카노","카페라떼","카푸치노","우유","오렌지주스","호떡호떡","미니호떡 치즈볼","굿모닝 세트","밤샘 세트","앨비스 세트","프레슬리 세트","재수 좋은 날 세트"]
var menu_price = [0,1500,1500,2000,2000,1700,2000,2000,2500,1500,1500,1500,1500,1500,2000,1500,2000,2700,3600,4000,3500]
var orderCount = Array.apply(null, new Array(21)).map(Number.prototype.valueOf,0);

function updateOrderList() {
    var price = document.getElementById("price")
    var tbody = document.getElementById("tbody")

    while(tbody.rows.length > 10) {
        tbody.deleteRow(7)
    }

    var sum = 0
    for(var i = 1; i < 21 ; i++) {
        if(orderCount[i] > 0) {
            sum += menu_price[i] * orderCount[i]
            var new_tr = tbody.insertRow(7)
            var new_td = new_tr.insertCell(0)
            new_td.setAttribute( 'colspan', '2' )
            var new_text = document.createTextNode(menu_name[i]+" X "+orderCount[i]+"개")
            new_td.appendChild(new_text)
        }
    }

    price.innerHTML = sum
}

function addOrderList() {
    var menu = document.getElementById("menu")
    var number = parseInt(document.getElementById("number").value)

    orderCount[menu.options[menu.selectedIndex].value] += number;
    updateOrderList()
}

function confirmOrder() {
    confirm("총 " +document.getElementById("price").innerHTML+ "원, 주문 하시겠습니까?")
    orderCount = Array.apply(null, new Array(21)).map(Number.prototype.valueOf,0);
    updateOrderList()
}

function initializeOrder() {
    orderCount = Array.apply(null, new Array(21)).map(Number.prototype.valueOf,0);
    updateOrderList()
}

window.onload=updateOrderList()