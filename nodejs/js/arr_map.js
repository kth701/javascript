// 배열 요수 추출 하여 새배열
const idList = [4,10,20]
// const userIdList = idList.map( (v) => v*2 )
const userIdList = idList.map( (v) =>  `userid_${v}` )

console.log(userIdList)

