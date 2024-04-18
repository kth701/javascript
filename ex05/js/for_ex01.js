
// 합계, 카운터

// 숫자 1,2,3,4,... 생성
// 변수 = 변수 + 숫자 => 숫자만큼 증가 => a = a + 1 => a += 1 => a++

// 1. 기억장소 확보, 초기화 작업
var count = 11

/* 반복 수행
count = count + 1
console.log(count) // 1

count = count + 1 // 2
console.log(count) 
*/
/*
for (i=1; i<=10; i++){
  //count = count + 1 // 1,2,3,...
  //count += 1
  count--
  console.log(count)
}
*/

/*
// 합계 => s = s + a => a는 숫자 발생
var sum = 0 // 합계 기억장소
var a = 0

a = a + 1 // 1
sum = sum + a // (0) + 1
console.log(sum)

a = a + 1 // 2
sum = sum + a // (1) + 2
console.log(sum)

a = a + 1 // 3
sum = sum + a // (1+2) + 3
console.log(sum)
*/

// a=a+1; b=b+a;

// 1-10까지의 합
// 숫자발생, 누적

var total = 0

for (i=1; i<=10; i++){
  total = total + i // +1, +2, +3,...
  console.log(i, total)
}

for (i=1; i<=10; i+=2){
  total = total + i // +1,  +3,...
  console.log(i, total)
}



