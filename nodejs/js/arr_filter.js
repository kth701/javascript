// 배열.filter(콜백함수)
// 조건을 만족하는 데이터의배열 생성
const num = [10,20,30,40]
const newArr = num.filter( (data)=> data>=30 )
console.log('30이상: ',newArr)

const newArr2 = num.filter( function (data) { 
  return data<=30
})
console.log('30이하:',newArr2)