// 내보내는 모듈 : export 
// export 선언한 데이터를 모듈로 공개

// 1. 하나씩 내보내기
// export class MyClass2 {
//   myMethod2() {
//     return 'Myclass2 메서드가 실행되었습니다.'
//   }
// }

//  export const PI = 3.1415292    // 상수 내보내기
//  export const myObj = {name: '홍길동', age:10} // 객체 내보내기
//  export function myPrn() { // 함수 내보내기
//   console.log('my task')
//  }

// 2. 한꺼번에 내보내기
class MyClass2 {
  myMethod2() {
    return 'Myclass2 메서드가 실행되었습니다.'
  }
}

const PI = 3.1415292    // 상수 내보내기
const myObj = {name: '홍길동', age:10} // 객체 내보내기
function myPrn() { // 함수 내보내기
  console.log('my task')
 }
function myPrn2(name, age){
  console.log(`name: ${name}, age:${age}`)
}

export { MyClass2, PI, myObj, myPrn, myPrn2}

