// 객체 복사하기
const obj1 = {
  result: true,
  members: [ 
    {id:1, name:'여우'},
    {id:2, name:'호랑이'},
    {id:3, name:'사자'},
  ]
}

console.log(obj1)
console.log(obj1.result)
console.log(obj1.members)
console.log(obj1.members[0])

console.log(obj1.members[0].id)
console.log(obj1.members[0].name)

// 객체 복사:  Object.assign({}, 복사대상객체)
const copiedObj1 = Object.assign({}, obj1)
console.log("-- copied: ",copiedObj1)
// 스프레드 연사자를 이용하여 객체 복사
const copiedObj2 = {...obj1}
console.log("-- copied obj2: ", copiedObj2)


// 객체 속성 확인
const userData = {
  // 데이터를 저장하는 장소: 멤버변수, 속성
  id: 1,
  name: '길순이',
  age: 10,
  test1: null,
  test2: undefined,
  // 함수정의 : 멤버함수(메서드), 기능
  mess: function() { alert('Hello')}
}
var isOk = userData.hasOwnProperty('id')
console.log(isOk)

isOk = userData.hasOwnProperty('address')
console.log(isOk)

console.log('id' in userData)
console.log('gender' in userData)

// 속성에 값여부 확인
console.log(userData.id != null)
console.log(userData.test1 != null)

let abc
console.log(abc) // undefined

const arr = [10,20,30]
// []=> null 상태
const arr_isNull = arr.filter( (data) => data > 100)
console.log("arr_isNull:",arr_isNull, arr_isNull != null)

// 객체 요소 값 확인
console.log(Object.keys(userData))// key 나열
console.log(Object.values(userData)) // value 나열
console.log(Object.entries(userData)) // key, value 나열

// 객체 요소 분할 대입
const userData2 = {
  id: 100, name:'김길동',age: 10
}
const {id,  age, name} = userData2
console.log(id, name, age)

// 속성에 별칭
const {name: myName} = userData2
console.log(myName, name)

// 객체 수정 제한하기
const num1 = 100
// num1 = 200// 수정불가


'user strict';
const objData = {
  id:  100, name:'길순'
}
Object.freeze(objData)//수정,삭제,변경 제한

objData.id=200
console.log(objData)

const number = [10,20]
Object.freeze(number)

number[0] = 200
console.log(number)
