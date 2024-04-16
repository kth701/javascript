

// 내장 함수
// 0~n-1사이 숫자 발생
// console.log( Math.floor(Math.random()*10) ) // 자리내림,  0~9
// console.log( Math.ceil(Math.random()*10) ) //자리올림 ,  1~10 

document.write("<h1>컴퓨터 가위,바위,보</h1>")

// 컴퓨터 생성한 가위,바위, 숫자
var com = Math.ceil(Math.random()*3) // 1~3사이 난수발생
console.log("컴퓨터:"+com)

var game = prompt("가위,바위,보 중 선택?", "가위")

var gameNum
switch(game){
  case "가위":
    gameNum=1; break
  case "바위":
    gameNum=2; break;
  case "보":
    gameNum=3;break;
  default:
    alert("잘못 작성했습니다.")
}


console.log("내:"+gameNum)

if (com == gameNum)
  document.write("잘 맞췄습니다. 축하 드립니다.")
else 
  document.write("틀렸습니다. 다시 시도해보세요.")



/*
let site = prompt("네이버, 다음, 네이트, 구글 중 \
즐겨 사용하는 포털 검색 사이트는?","")

let url =""

switch(site){
  case "구글":
    url = "www.google.com"
    break
  case "다음":
    url ="www.daum.net"
    break
  case "네이버":
    url = "www.naver.com"
    break
  case "네이트":
    url = "www.nate.com"
    break
  default:
    alert("보기 중에 없는 사이트입니다.")
}

// 새창 띄우기위해 윈도우 객체 생성
var win = window.open("about:blank")
if (url) {
  // window
  //   .open("about:blank")
  //   .location
  //   .href = "http://"+url

  win.location.href = "http://"+url
  win.location.target = _blank // 새창 띄우기;
}

*/