
// 상위클래스(부모클래스, 슈퍼클래스)
class MyParent {
  parentMethod(){
    console.log('MyParent : 부모클래스')
  }
}
// 자식클래스: 부모클래스로부터 상속받은 클래스
class MyChild extends MyParent {
  childMethod(){
    console.log('MyChild : MyParent 클래스로부터 상속 받은 자식클래스')
  }
}

const myParent =  new MyParent()
console.log("1. 부모클래스:")
myParent.parentMethod()

const myChild =  new MyChild()
console.log("2. 자식클래스:")
myChild.childMethod()
myChild.parentMethod() // 부모 클래스에서 정의한 함수

console.log("3. ---- class extends ")

class Person {
  constructor(name, age){ //  객체가 생성될 때 멤버변수 초기화
    this.name = name;
    this.age = age
    console.log('부모 생성자 호출')
  }
  sayHello(){
    console.log(`이름: ${this.name}, 나이: ${this.age}`)
  }
}
class Student extends Person{
  constructor(name, age, grade){ // 부모 생성자: super()
    super(name, age) // 부모 클래스에 있는 멤버변수는 부모생성자에서 초기화작업을 해야함.

    this.grade = grade
    console.log('자식 생성자 호출')
  }
  sayStudent(){
    console.log('sayStudent() => ',this.name, this.age, this.grade)
  }
}
console.log("--> Person")
const person = new Person('길순이', 15)

console.log(person.name, person.age)
person.sayHello()

console.log("--> Student")
const student = new Student('동길이', 12, 4)

student.sayHello()
student.sayStudent()
