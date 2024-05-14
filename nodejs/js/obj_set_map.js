// 리스트 구조 : 중복 허용, 순서가 있음.
// 스택구조 : LIFO(나중입력 먼저출력)
const items = [10,20,30,40,40,40]

console.log("--- list구조(배열), 객체[index]")
console.log(items)

items.push("길순이") // 추가 .push()
console.log(items)

items.pop() // 삭제 .pop()
console.log(items)

// Set구조 : 중복제거, 순서가 없음
/*
new Set(반복가능한 객체)
세트객체.add(값): 추가
세트객체.has(값): 존재 여부 확인
세트객체.delete(값): 삭제
세트객체.clear(): 전체 삭제
세트객체.values(): 전체 값을 반환:(Iterator)
세트객체.forEach(콜백함수)
*/
const userIdList = new Set();
userIdList.add('20') // .add() =>추가
userIdList.add('20')
userIdList.add('20')
userIdList.add('20')
userIdList.add('10')

console.log("--- Set()")
console.log(userIdList)

// const userIdList2 = new Set([20,50,30,30])
const userIdList2 = new Set(items)
console.log(userIdList2)

console.log("-- Set.values()")
const valueSet = userIdList2.values()
for (let value of valueSet){
  console.log(value)
}
// console.log(valueSet)

console.log("-- Set : forEach()")
userIdList2.forEach((value)=> console.log(value))

console.log("-- Set : delete(값)")
userIdList.delete(40)
userIdList.forEach((value)=> console.log(value))

console.log(userIdList.has(40))

console.log("-- Set : clear(값)")
userIdList.clear()
userIdList.forEach((value)=> console.log(value))

// 맵 초기화
const memberList = new Map()
memberList.set(1,'홍길순1')
memberList.set(2,'홍길순2')
memberList.set(3,'홍길순3')
memberList.set(3,'홍길순300')
console.log(memberList)

console.log("--- map객체.get(키)=> 값추출")
console.log(memberList.get(2))
console.log(memberList.has(2)) // 존재여부확인
console.log(memberList.delete(2)) // .clear():전체 삭제
console.log(memberList)

console.log("-- map.keys(): 키값만 추출")
console.log(memberList.keys())
console.log("-- map.values(): 값만 추출")
console.log(memberList.values())
console.log("-- map.entries(): 키와값모두 추출")
console.log(memberList.entries())

console.log("-- map객체.forEach()")
memberList.forEach( (v, k) => {
  console.log(`key:${k}=>value:${v}`)
})

console.log( memberList.size) // 갯수
const memberList2 = new Map([ [1,'홍길동'],[2,'홍길순']  ])
console.log(memberList2)





