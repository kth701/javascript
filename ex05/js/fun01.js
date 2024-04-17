// 독립된 단위 프로그램



// 함수 호출
// numberPrint()
// numberPrint2(10,15)
// numberPrint2(1,2)
// numberPrint2(100,103)

// let result = sum(1000,10)
// console.log(result)

calcSum(10)
calcSum(10,20)
calcSum(10,20,30)

// 함수 정의
// 4. 가변 인자
function calcSum(...values){

  for (const value of values){
    console.log(value)
  }

}


// 3. 인자가 있고, 반환값이 있는 함수
function sum(num1, num2){
  return (num1+num2)
}

// 1.인자가 없는 함수
function numberPrint() {

  for (i=1; i<=3; i++) {
    console.log(i)
  }
}
// 2.인자가 있는 함수
function numberPrint2( start, end ){
  for (i=start; i<=end; i++) {
    console.log(i)
  }
}

