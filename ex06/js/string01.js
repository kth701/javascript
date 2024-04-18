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

// 공백 자르기
console.log('trim()','hello !'.length, ' hello ! '.trim().length)
const str1 = "Javascript good!!"
// 첫번째 위치 : index 0번
console.log( str1.indexOf('Javascript'))
console.log( str1.indexOf('script'))
console.log( str1.indexOf('python')) // 없으면 -1 반환

if ( str1.indexOf('python') < 0) 
  console.log('python문자열을 포함하고 있지 않습니다.')
else 
  console.log('찾고자하는 문자열을 포함하고 있습니다.')

console.log( str1.indexOf('a',4)) // 특정 인덱스번호 부터 검색

// 정규식 표현
console.log( str1.search(/Javascript/)  )   //검색 성공: index 번호
console.log( str1.search(/HTML/)  ) // 검색 실패

console.log( str1.includes('Javascript')) //검색성공여부 : true/false
console.log( str1.includes('HTML'))

console.log('startsWith()', str1.startsWith('Ja')) // 문자열 시작 확인
console.log('startsWith()', str1.startsWith('HTML'))
console.log('endsWith()', str1.endsWith('!!'))
console.log('endsWith()', str1.endsWith('HTML'))

// 특정 위치에 있는 문자열 추출
console.log('javascript'.charAt(5))


// 검색어
const searchWordText = document.querySelector('#search-word-input')
// 지역리스트
const prefectureList = document.querySelector('#prefecture-list')
// 문자가 입력될 때마다 데이터 체크 작업 실해행
searchWordText.addEventListener('keyup',()=>{
  // 입력한 검색어
  const searchWord = searchWordText.value
  


  prefectureList.forEach( () => {

    // if (!searchWord || searchWord='') {
    // }

  });


})


// forEach()
const data = [10,20,30]
for (i=0; i<data.length; i++){
  console.log(data[i])
}
console.log("forEach()")
data.forEach((item) =>{
  console.log(item)
})