
// 1. HTML요소 JS와 연결
var _try = document.querySelector('#try')
var _btnCheck = document.querySelector('#check')
var _reset = document.querySelector('#reset')
var _display = document.querySelector('#display')
var _counter = document.querySelector('#counter')
// console.log(_try)
// console.log(_check)
// console.log(_reset)
// console.log(_display)
// console.log(_counter)


// 2. 이벤트 등록하기
// 확인버튼에 이벤트 등록하기
/*
_btnCheck.addEventListener('click',()=>{
  // var userNum = _try.value
  // alert(`사용자가 입력한 수: ${userNum}`)
  finding()
})
*/
_btnCheck.addEventListener('click',finding)

// 숫자 입력란에서 enter키 이벤트 등록하기
_try.addEventListener('keypress',(e)=>{
  // e: 이벤트가 발생한 객체의 정보가 전달됨. 
  // 여기서는 key의 기본정보중 keycode값이 키를 구분해줌
  if (e.keyCode == 13) {
    // var userNum = _try.value
    // alert(`사용자가 입력한 수: ${userNum}`)
    finding() 
  }

})

var counter = 0// 횟수 체크
// 입력받은 숫자에 대한 조건 처리하는 함수
function finding(){
  var userNum = _try.value
  //alert(`사용자가 입력한 수: ${userNum}`)

  counter++
  if (userNum >=1 && userNum<=100){

    if (rnd == userNum) {// 컴퓨터가 생성한 숫자== 사용자 입력 숫자
      _display.innerHTML = "<h1>맞혔습니다.</h1>"
    } else if (rnd > userNum) {
      _display.innerHTML = "UP!"
    } else {
      _display.innerHTML = "DOWN!"
    }
    _counter.innerHTML = "시도 횟수: "+counter+"회"

  } else {
    alert("1과 100사이의 숫자를 입력하세요.")
  }
}

// '다시' 버튼 클릭시 수행 할 함수정의(태그에서 호출)
function fun_reset() {
  window.location.reload()
}


// 3. 컴퓨터 숫자 발생1~100사이 무작위
var rnd = Math.ceil( Math.random()*100 )
console.log('컴퓨터가 발생한 숫자:',rnd)
// for (i=0; i<=10; i++){
//   var rnd = Math.ceil( Math.random()*100 )
//   var rnd = Math.floor( Math.random()*100 )+1
//   console.log(rnd)
// }
//  onclick="fun_reset()
