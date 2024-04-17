// 결과값에을 표시 대상 => 콘솔창, HTML태그로 표시
// 진위 여부판별 : Boolean타입 => true/false


console.log("== 값이 있을 경우 판별")
const userName = '홍길동'
if (userName) {
  console.log("값여부 판별:", userName, Boolean(userName))
}
console.log("0=>",Boolean(0))
console.log("1=>",Boolean(1))
console.log("-1=>",Boolean(-1))
console.log("!0=>",!Boolean(0)) // false -> true
console.log("!!0=>",!!Boolean(0)) // false -> true -> false
console.log('홍길동', !'홍길동')
console.log(24, !24)
console.log([1,2,3], ![1,2,3])

const flg ='Javascript'.includes('a') // 포함여부 판별
console.log("a포함여부:",flg, !flg)

if (flg) 
  console.log('문자가 있습니다.')


var userName2   // 기억장소만 확보, 값이 없는 상태
console.log("userName2에 데이터가 없을 경우 판별:", Boolean(userName2))

userName2='길순이'
console.log("userName2에 데이터가 있을 경우 판별:", Boolean(userName2))


console.log("== 비교연산자 결과: true/false")
const a = 10
const b = 20

console.log(a > b) // 관계(비교) 연산의 결과 true/false
console.log( a < b )
