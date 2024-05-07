// JSON은 범용적인 데이터 형식
// JSON구조
/*
{
  "age": 40,
  "grade": 4,
  "classes": [
    { "name":'홍길동', "address": "busan"},
    { "name":'홍길동', "address": "busan"},...
  ]
}
*/

// 서버쪽에서 클라이언트에게 넘길때 사용 
const data = `{ "name": "길순이","age":20 }`
// 문자열을 JSON으로 전환
const info = JSON.parse(data)

console.log('json형식의 문자열', data)
console.log('json객체',info)
console.log(info.name, info.age)

// JSON객체 => 문자열 전환
const info_string = JSON.stringify(info)
console.log(info_string)

console.log("-- JSON 커스터마이징")
const obj = {
  pref: 'seoul',
  orange: 100,
  flag: true,
  apple: 100
}
const replacer = (key, value) => {
  if (typeof value === 'number'){
    return undefined;
  }
  return value
}
str1 = JSON.stringify(obj)
console.log(obj)
console.log(str1)

str2 = JSON.stringify(obj, replacer, '  ')
console.log(str2)

