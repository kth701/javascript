// 인스턴스 생성 없이 메소드 호출
class myStatic {
  static method(){
    console.log('정적 메소드....')
  }
  static myName(firstName, familName){
    return (`${firstName} ${familName}`)
  }
}

// 생략 => const obj1 = new myStatic()
// 클래스명.메서드() 형식으로 접근
console.log('1. static')
myStatic.method()
console.log( myStatic.myName('그레고리', '포터'))