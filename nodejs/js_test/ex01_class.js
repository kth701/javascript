// 객체 = 변수(속성) + 함수(메서드,기능)
/* 사용자 객체 만들기 */
var Picture = new Object()

Picture.name = "길순이"
Picture.age = 10

Picture.info = function () {
  console.log("당신의 이름은 "+Picture.name+"입니다.")
}

console.log(Picture)
console.log(Picture.name)
console.log(Picture.age)
console.log(Picture.info)

Picture.info()

// 리터럴 방식으로 객체 만들기
var Picture2 = { 
  
  name:"강감찬", 
  age:15,

  info: function(){
    console.log("당신의 이름은 "+this.name+"입니다.")
  },
  info2: function(name, age){
    console.log("이름: "+name+",나이:"+age)
  }
}
console.log('--- 리터럴 방식 객체만들기')
console.log(Picture2.name)
console.log(Picture2.age)
Picture2.info()
Picture2.info2("동길이홍",12)

var Student = {
  name: "홍길동",

  kor: 100,
  mat: 50,
  eng: 100,

  tot: function(){
    return (this.kor+this.mat+this.eng)
  },
  avg: function(){
    return (this.kor+this.mat+this.eng)/3
  }
}

console.log("학생 이름: "+Student.name)
console.log("총점:"+Student.tot())
console.log("평균:"+Student.avg().toFixed(2))

// 객체 생성자 함수 : 객체 초기치 설정할 때 사용
// 객체 생성 시점에 1번 수행하는 함수

function Person(name, age, weight){
  // 생성자 함수를 이용하여 멤버변수(속성)을 설정
  this.userName = name,
  this.age = age,
  this.weight = weight
}
Person.prototype.getInfo = function() {
  console.log(`이름: ${this.userName}, 나이:${this.age},몸무게:${this.weight}`)
}

// var jang = new Person("강감찬", 180,80)
// console.log(jang)
// jang.getInfo()

// var lee = new Person("이순신", 190,90)
// console.log(lee)
// lee.getInfo()


