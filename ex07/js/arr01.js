const arr1 = [] // 배열구조 변수 선언
const arr2 = [0,2,8] // 배열객체 초기화
const arr3 = ['곰','여우']
const arr4 = [1,'홍길동',true]
const arr4_1 = new Array(5)

console.log('-- 배열객체 내용 보기')
console.log(arr1)
console.log(arr2)
console.log(arr3)
console.log(arr4)
console.log(arr4_1)

console.log('-- 1차원 배열구조 반복자를 통해 데이터연속읽기 --')
console.log('-- for문')
for(var i=0; i<arr4.length;i++){// 0,1,2
  console.log(arr4[i]) //arr4[0],arr4[1],arr4[2],
}
console.log('-- 화살표 함수식표현')
arr4.forEach( (value, index)=> {
  console.log(value, '=>', index)
})
console.log('-- 확장 for')
for (var value of arr4){
  console.log(value)
}


console.log('-- 배열 내 다른 배열/객체')
const arr5 = [ [11,12,13], [21,22,23] ]
console.log(arr5)
console.log(arr5[0],arr5[1])
console.log(arr5[0][0],arr5[0][1],arr5[0][2] )
console.log(arr5[1][0],arr5[1][1],arr5[1][2] )

console.log('-- 2차원 배열객체 데이터 읽기')
for (i=0; i<arr5.length; i++){
  console.log("---")
  console.log(arr5[i])

  for (j=0;j<arr5[i].length; j++){
    console.log(arr5[i][j]) // arr5[0][0],[0][1],[0][2],[1][0],..
  }
}

const arr6 = [ {id:1, name:'홍길동'}, {id:2, name:'홍길순'} ]
console.log(arr6)
console.log(arr6[0], arr6[1])
console.log(arr6[0].id,arr6[0].name)
console.log(arr6[1].id,arr6[1].name)
