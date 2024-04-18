// 문자열 길이
console.log("홍길동은 부산에 있습니다.".length)
console.log(" 홍길동은 부산에 있습니다. ".length)

// textarea영역
let textarea = document.querySelector('#textarea')
let str_len = document.querySelector('.str_len')

// 이벤트 핸들러 구성
// 텍스트를 입력할 때 마다 함수를 수행: onKeyUp()
textarea.addEventListener('keyup', onKeyUp) // '이벤트종료', '수행할함수'

// 수행할 함수 정의
function onKeyUp() {
  // 입력된 글자 읽어오기
  str_len.innerText = textarea.value.length  // 입력한 문자 개수
  str_len.style.color = 'red'
}
