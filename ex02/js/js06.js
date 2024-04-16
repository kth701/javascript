/*
연산식: 
산술식 => 
이항 연산 : +,-,*,/,%(나머지), **(제곱)
단항 연산 : ++,--
관계 연산 : >,>=,<,<=,!=, 같음(==,===)
          : 관계연산의 결과는 true, false
논리연산 : !(NOT), 
&&(AND) : 모든 조건이 true=> true, 
||(OR) : 모든 조건이 false => false
^(XOR) : 모든 조건인 true 이거나 false이면 false

not -> and -> or

삼항 연산자 : 조건식 ? true경우처리 : flse인경우 처리

복합형 대입연산자
+=, -=, *=, /=, %=
*/
let num5 = 100
num5 += 100 // +=숫자 만큼 더하기
console.log(num5)

num5 -= 10
console.log(num5)



console.log( 10<2 ? "10은 2보다 크다": 1000)

console.log("!(not)=>", (5>2), !(5>2))
console.log("&&(and)=>",5>2 && 5>3 && 5>1)
console.log("||(or)=>",5<2 || 5<3 || 5<1)
console.log("^(xor)=>",5<2^5>1) // 0(false),1(true)

console.log(5>2)
console.log(5<2)
console.log(5!=2)
console.log(5==2)
console.log("5==5",5==5)
console.log("5=='5'",5=='5')
console.log("5==='5'",5==='5')


// 1. 기억장소 선언
let num1=10, num2=3
let add, sub, mul, div, mod, pow

// 2. 계산 처리
add = num1 + num2
sub = num1 - num2
mul = num1 * num2
div = num1 / num2
mod = num1 % num2 // 나머지
pow = num2 ** num2

console.log(add,sub,mul,div,mod,pow)

let num3 = 10
console.log("num3=" +  num3++)
console.log(num3)
