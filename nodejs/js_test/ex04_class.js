// 클래스에서 메소드 사용하기
class MyClass {
  constructor(){
    this.name = '홍길순'
  }
  myNamePrn() {
    console.log("이름: "+this.name)
  }
}

console.log('1.-- 클래스 정의하여 객체 생성하기')0
const obj1 = new MyClass()
const obj2 = new MyClass()
const obj3 = new MyClass()
console.log(obj1,obj2, obj3)



console.log(obj1.name)
obj1.myNamePrn()

console.log("2. -----")

class Student {

  constructor(name, kor, mat, eng){
    this.name = name
    this.kor = kor
    this.mat = mat
    this.eng = eng

    this.tot = 0
    this.avg = 0.0
  }
  // 총점 계산하는 함수 정의
  totMethod() {
    this.tot = this.kor+this.mat+this.eng
  }
  // 평균 계산하는 함수 정의
  avgMethod() {
    this.avg = (this.tot)/3
  }
  scoreInfo(){
    console.log(`이름: ${this.name}, 평균:${this.avg}`)
  }
}

const student = new Student("홍길순",100,90,80)
console.log("초기값: ",student)

student.totMethod()
student.avgMethod()
console.log("성적 계산후:",student)

console.log(student.kor, student.mat,student.eng, student.tot,student.avg)


