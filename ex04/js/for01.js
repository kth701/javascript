/*
for(초기치;조건식;증감치){
  반복처리할 내용
}
*/
let num1 = 5
console.log(num1==5) // 비교연산
console.log(Boolean(num1=10)) // 대입문
console.log("-----")


for (let i=1; i<=10; i++){
  //if (i=5) break; // if(true) break;
  if (i==5) break;
  console.log("반복구간",i)
}



for (let i=1; i<=10; i++){
  if (i%3==0) continue;// if문 다음 문장은 수행안됨
  console.log("반복처리구간",i)
}

