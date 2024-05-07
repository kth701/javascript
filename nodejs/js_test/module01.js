// 내보내는 모듈 : export 
// export 선언한 데이터를 모듈로 공개

// export default : 하나의 파일에 하나의 모듈만 내보내기
export class MyClass1 {
  myMethod1() {
    return 'Myclass1 메서드가 실행되었습니다.'
  }
}

export default MyClass1