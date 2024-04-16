/*
제어문 : 흐름의 방향을 제어
if, switch, while, for

1. 
- if (조건식) 참인 경우 처리
- if (조건식)
    참인 경우
- if (조건식) {
    참인 경우
  }

2. if else

if (조건식) 참인경우 else 거짓인 경우
if (조건식)
  참인 경우
else 
  거짓인 경우

if (조건식)  {
  참인 경우
} else {
  거짓인 경우
}

3. else if
if (조건식1) 
  참인경우1
else if (조건식2)
  참인경우2
else if (조건식3)
  참인경우3
else 
  거짓인 경우
*/

/*
90이상 : A학점
80이상 : B학점
70이상 : C학점
60이상 : D학점
60미만 : F학점
*/


let score
score = prompt("점수:",0)

if (score>=90)
  document.write("<h3>A학점</h3>")
else if(score>=80) // 90미만
  document.write("<h3>B학점</h3>")
else if (score>=70) // 80미만
  document.write("<h3>C학점</h3>")
else if (score>=60)  // 70미만
  document.write("<h3>D학점</h3>")
else // 60미만
  document.write("<h3>F학점</h3>")  

console.log(score)


/*
let num2
num2 = prompt("숫자1:",0)

if (num2%2==0)
  // console.log(`입력한 숫자 ${num2}는 짝수`)  
  // alert(`입력한 숫자 ${num2}는 짝수`)
  document.write(`<h1>입력한 숫자 ${num2}는 짝수</h1>`)
else 
  // console.log(`입력한 숫자 ${num2}는 홀수`)  
  // alert(`입력한 숫자 ${num2}는 홀수`)
  document.write(`<h1>입력한 숫자 ${num2}는 홀수</h1>`)

*/


/*
const num1 = -10
if (num1>0) 
  console.log("0보다 크다")
else // num1<= 0 
  console.log("0이거나 작다")

console.log("----")


const myPrice = 1000

if (myPrice>=50) {
    console.log("50보다 같거나 크다")
    console.log("단순 if문입니다.")
}

console.log("다음 문장 수행...")

*/
