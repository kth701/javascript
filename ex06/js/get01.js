/*
문서 객체를 선택
1개선택
  document.getElementById(아이디)
  document.getSelector(선택자)
여러 개 선택
  document.getElementByClassName(클래스)
  document.getElementByName(태그이름)
  document.getElementByAll(선택자)
*/
// backgroundColor, fontSize, width

// 아이디 선택자 설정
// var header = document.getElementById('header')
// var header = document.querySelector("#header")
 
// var header = document.querySelector("h1") 
// 태그요소 선택시 여러개일 경우는 배열구조형식으로 전환 됨.
var header = document.querySelectorAll("h1") 

// header[0], header[1],...
for (i=0; i<header.length; i++){
  header[i].innerHTML = '태그 선택자입니다.';
  header[i].style.color = 'orange';
  header[i].style.backgroundColor = 'red';
}




