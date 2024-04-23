// 요소의 개별 변수에 분할대입(할당)
let a,b,c
[a,b,c] = [1,2,3]
console.log(a,b,c)

console.log("---")
const array = ['홍길동','홍길순'];// 문장을 끝을 알리는 세미콜론있어야 할당됨.
[array[0], array[1]] = [array[1], array[0]];
console.log(array)

// 배열 섞기(셔플)
const arr = [1,2,3,4,5]
const arr_len = arr.length
console.log(arr, arr_len)

// 피셔 예이츠 알고리즘
for (let i=arr_len-1; i>=0; i--){
  //console.log(i) // 4 3 2 1 0
  // random()*10 =>0~9 
  const rnd = Math.floor(Math.random() * (i+1));
  //console.log(i, rnd)
  [arr[i], arr[rnd]] = [arr[rnd],arr[i]]
}
console.log(arr)

