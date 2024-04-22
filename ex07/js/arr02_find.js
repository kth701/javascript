// 배열.find( 콜백함수) // 콜백함수 조건에 맞는 첫 요소
// 배열.findIndex(테스트함수) // 콜백함수 조건에 맞는 첫 요소인덱스

const myArray = ['홍길동','홍길순','강감찬','길순이','이순신','강감찬']

const targetUser = myArray.find((data)=> data == '강감찬'  )
console.log( targetUser)

const targetUserIndex = myArray.findIndex((data)=> data == '강감찬'  )
console.log( targetUserIndex)

// -------------------------------------------- //
// 유저 정보 배열에서 가져온 데이터를 표시
// -------------------------------------------- //

// id키와 name키를 가지는 데이터배열
const userDataList = [
  {id:123, name:'곰'},
  {id:1021, name:'사자'},
  {id:6021, name:'여우'}
]
// 검색 ID 입력창
const searchIdInput = document.querySelector('#search-id-input')
// 검색 결과
const searchResult = document.querySelector('#search-result')

// console.log(searchIdInput)
// console.log(searchResult)

// 이벤트 핸들러 
// 문자가 입력될 때마다 내용 체크
searchIdInput.addEventListener('keyup', ()=>{
  // 키보드로 입력한 숫자는 문자열
  // 문자열-> 숫자 번환 : Number()
  const searchId = Number(event.target.value)
  console.log('키워드:',searchId)
  findUser(searchId)
})


// 유저 검색 함수 정의
function findUser(searchId) {

  // 해당 데이터 가져오기
  const targetData = userDataList.find( (data)=> data.id == searchId   )

  if (targetData ==  null){// 해당 데이터가 없으면
    searchResult.innerHTML = '<h1>유저 검색 결과 없음</h1>'
    // searchResult.textContent = '<h1>저 검색 결과 없음</h1>'
    return
  }
  // 검색 결과의 이름 표시
  searchResult.innerHTML = targetData.name;
  // searchResult.textContent = targetData.name;
  
}