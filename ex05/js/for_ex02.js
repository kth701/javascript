// 3명의 학생 점수를 입력받아 전체 총점과 평균 구하기

var jumsu = 0
var tot=0, avg=0

for (i=1; i<=3; i++){
  jumsu = prompt("점수 입력:",0)
  jumsu = Number(jumsu)   // 문자열 => 숫자형으로 전환

  tot = tot + jumsu
  console.log(tot)
}
avg = tot/3
console.log(`전체총점: ${tot}, 전체평균: ${avg}`)

