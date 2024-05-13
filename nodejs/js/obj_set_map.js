const items = [10,20,30,40,40,40]
console.log(items)
items.push("길순이")
console.log(items)

// const userIdList = new Set();
// userIdList.add('20')
// userIdList.add('20')
// userIdList.add('20')
// userIdList.add('20')
// userIdList.add('10')

// const userIdList = new Set([20,50,30,30])
const userIdList = new Set(items)
console.log(userIdList)

console.log("-- Set.values()")
const valueSet = userIdList.values()
for (let value of valueSet){
  console.log(value)
}
console.log(valueSet)

console.log("-- Set : forEach()")
userIdList.forEach((value)=> console.log(value))

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
console.log(memberList)

console.log(memberList.get(2))
console.log(memberList.has(2))
console.log(memberList.delete(2)) // .clear():전체 삭제
console.log(memberList)

console.log(memberList.keys())
console.log(memberList.values())
console.log(memberList.entries())





