// 배열구조 => []
// 객체구조(JSON) => {}
let a = 10
const arr = [10,20,30]
const arr2 = [ [1,2,3], [4,5,6]]
console.log('a=',a)
console.log('arr=',arr)
console.log(a[0])
console.log(arr2)
console.log(arr2[0])
console.log(arr2[0][1])

const obj = { a:100, b:200,c:300}
console.log(obj)
console.log(obj.a)
console.log(obj['a'])

const arr_obj = [
  {name:'길순이',age:10},
  {name:'길순이1',age:15}
]
console.log(arr_obj)
console.log(arr_obj[0])
console.log(arr_obj[0].name)
console.log(arr_obj[0].age)
