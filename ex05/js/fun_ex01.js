// 익명함수 선언할 경우 호출보다 먼저 선언해야함.

var return_str = () => "홍길동 만세"
var return_num = (num1) => num1*num1
var return_num2 = (num1) => { return num1*num1 }
document.write( return_str()+"<br>" )
document.write( return_num(9)+"<br>" ) 
document.write( return_num2(9) ) 

// 전역변수: 함수밖에서 선언 변수
// 지역변수: 함수내에서 선언 변수

var name1 = "홍길순"    //전역변수
function fun_local() {
  var name2 = "홍길동"    //지역변수(함수가 실행하는 동안에만 값을 유지)
  name3 = "강감찬 "       // 함수안에서 전역변수 선언시 var키워드 생략하기
  console.log("name1:"+name1)
  console.log("name2:"+name2,name3)
}
function fun_local2() {
  var name2 = "동길이"  // 지역변수
  console.log("name1:"+name1)
  console.log("name2:"+name2,name3)
}
fun_local()
fun_local2()
//console.log(name1, name2)   // error: name2은 지역변수로 없는 변수로 인식
console.log(name1, name3)


/*
var mySum2 = (start, end) => {
  if (start>end) {
    alert("인자값이 문제가 있습니다.")
    return
  } 

  var sum = 0
  for (i=start; i<=end; i++){
    sum += i
  }
  document.write(sum+"<br>")

  return (sum)
}
var tot = mySum2(1,10)
document.write(`<h3>${tot+10000}</h3>`)
*/

/*
function mySum(start, end){
  // 값의 유효성 검사
  if (start>end) {
    alert("인자값이 문제가 있습니다.")
    return
  }

  var sum = 0
  for (i=start; i<=end; i++){
    sum += i
  }
  document.write(sum+"<br>")
}
mySum(10,1)
mySum(1,100)
mySum(1,1000)
*/

/*
var myPrn2 = (str) => {
  for(i=1; i<=10;i++){
    document.write(str)
  }
  document.write("<hr>")  
}
myPrn2('/')
*/


/*
myPrn("*")
myPrn("@")
myPrn("~")


// 함수 정의
function myPrn(str) {
  for(i=1; i<=10;i++){
    document.write(str)
  }
  document.write("<hr>")
}

*/



