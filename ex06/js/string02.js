// 문자열 다루기: 위치 저정하여 선택하기
console.log("-- slice(시작인덱스, 마지막인덱스): 문자추출결과:0~n-1까지")
console.log('javascript'.slice(0,4))// 0~n-1
console.log('javascript'.slice(0))
console.log('javascript'.slice(4))// n이후

console.log("-- substring(시작인덱스, 마지막인덱스): 문자추출결과:0~n-1까지")
console.log('javascript'.substring(0,4))
console.log('javascript'.substring(0))
// 시작>마지막: 음수 인식
console.log('javascript'.slice(3,-1))
console.log('javascript'.substring(3,-1))// (3,0)
console.log('javascript'.substr(4,5)) // (시작번호, 개수)

// 문자열 변환
console.log(".replace(이전문자, 바꿀문자)")
console.log('image1.png'.replace('1.png','2.png'))
const inputText = '홍길동\n홍길순' // "\t,\n,\\,\',.. "
console.log(inputText)
console.log( inputText.replace('\n','') )
var name ='홍길동 홍길순 동길이 동길홍'
// var name1 = name.replace(' ','') // 특정 문자 삭제
// var name2 = name.replace(' ',',')
var name1 = name.replaceAll(' ','') 
var name2 = name.replaceAll(' ',',')
console.log(name)
console.log(name1)
console.log(name2)
var tel = "010-1234-7899"
var tel_number = tel.replace(/-/g,'') // 정규식 표현
console.log(tel_number)

/*
텍스트 영역에 입력한 전화번호의 하이픈(-)을 제거한
내용을 표시하기
*/
document.querySelector('#sendBtn').addEventListener('click',()=>{
  // html에서 tel input요소의 값 읽기
  const tel = document.querySelector('#tel').value
  
  // 전화번호에서 '-'제거
  const tel_number = tel.replace(/-/g, '') // '-'기호 제거
  alert(`전화번호는 ${tel_number} 입니다.`)
})


