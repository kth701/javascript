// 에러 발생 확인
// 실행중 에러 발생시 에러를 잡고 
// 다음문장으로 정상 처리하여 종료
const a = 10
try {
  a = 100 // const 읽기만 가능
} catch (e) {
  console.log(`에러가 발생했습니다. ${e.message}`)
}
console.log("=>",a)

// 에러가 발생시 실행 중단
/*
console.log("----")
const b = 100
b=200
console.log("b=",b)
*/

// 50% 확률로 에러를 발생시켜 try와 catch처리
function generateError(){
  try {

    var rnd = Math.random()
    console.log("------------")
    console.log("숫자=>",rnd)

    if (rnd > 0.5) {
      throw new Error(`number: ${rnd}`)
    } else {
      console.log('에러 없음')
    }

  } catch (error) {
    console.log('errorMessage:',error.message)
  }finally { // 무조건 수행
    console.log('에러 처리 완료')
    console.log('에러 여부 관계없이 무조건 수행')
  }
}
//setInterval(generateError, 1000);// 1.5초 단위로 generateError()함수 반복호출

/*
에러종류
RangeError :값이허용 범위 내에 없음
ReferenceError: 선언되지 않은 변수를 호출
SyntaxError: 언어 구문 부정확
TypeError: 데이터 타입 부정확
URIError: URI 부정확
*/

try {
  // 1. SyntaxError
  // let num null 

  // 2. ReferenceError
  console.log(b) 
} catch (error) {
  console.log(error)
}