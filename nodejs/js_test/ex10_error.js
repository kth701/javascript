const a = 10
console.log(`상수a의 값은 ${a}입니다.`)
// 시스템에서 제공하는 에러 
//console.log(`다음 작업을 ${b}실행합니다.`)

const error = new Error('에러가 발생하였습니다.')
console.log( error.message )

// 인자값이 숫자 타입이 아닌 경우 에러발생
function myFunction(params) {
  if ( typeof params !== 'number') {
    // 에러 생성
    const error = new Error(`${params}'Number 타입이 아닙니다.`)
    alert(error.message)

    throw error  // 에러 던지기
  }

}

myFunction(5)
myFunction('강감찬')