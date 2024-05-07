// 캡슐화 : 정보묶어주는 기능, 정보은닉 기능

class SetGetClass {
  // #멤버변수 => private 멤버변수로 클래스내에서만 접근가능
  #myName
  constructor(value){
    this.#myName = value
    // this.myName = value  // public
  }

  setmyName(value){ // setmyName()메서드는 public
    this.#myName = value
    // this.myName = value  // pubic
  }
  getmyName(){// getmyName()메서드는 public
    return this.#myName
    // return this.myName   // public
  }

}

const myInstance = new SetGetClass()
// console.log("1. public ")
// console.log(myInstance)
// myInstance.myName=100
// console.log(myInstance)

console.log("2. private => 메서드를 통해 접근 가능 ")
// myInstance.myName = '동순이'     // 접근 불가
//console.log(myInstance.myName)    // 접근 불가

//멤버변수 값설정: 메서드로 통해
myInstance.setmyName( "강감찬") 
// 멤버변수 값읽기: 메서드로 통해
console.log( myInstance.getmyName()  ) 
