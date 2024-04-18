/*
자바스크립트는 객체(Object)기반 언어
객체 => 기능과 속성을 가진 형태 => 변수+함수

객체 종류
- 내장객체: String, Date, Array,....
- 브라우저 객체모델: window.screen,location,navigator
- 문서 객체모델 : HTML문서 구조
*/

// 데이터 구조를 정의 
var product = {
  name: '망고',
  type: '당절임',
  desc: '망고, 설탕,..',
  other: '필리핀'
}
console.log(product)
console.log(product.name)
console.log(product.type)
console.log(product.desc)
console.log(product['other'])

// 확장 for
for (var key in product){
  console.log(key,product[key])
}

var person = {
  // 멤버변수(속성)
  name: '홍길동',
  age: 10,

  score: [100,80,20],// 배열
  other: { addr:'부산시', gender: '여자'}, //객체

  // 멤버함수(메서드)
  eat : function(food) { 
    console.log(food + '을 먹었습니다.')
  },
  myPrint: (a,b)=>{ // 화살표 함수에서 this적용 안됨
    console.log(`거주지:${a}, 성별:${b}`)
  },
  printName: function() {
    console.log(`당신의 이름은 ${this.name}입니다.`)
  }
}

console.log(person.name)
console.log(person.age)
person.eat('바나나')

console.log("---")
console.log(person.score) // 객체 안에 있는 배열
console.log(person.score[1])
console.log(person.other) // 객체 안에 하위 객체
console.log(person.other.addr)
console.log(person.other.gender)
console.log(person.myPrint('서울시','남자'))
console.log(person.printName())



