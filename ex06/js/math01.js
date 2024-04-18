// 수학 객체

console.log(Math.abs(1), Math.abs(-1)) // 절대값 반환
console.log(Math.max(10,50,90,100))
console.log(Math.min(10,50,90,100))

console.log(Math.round(10.54),Math.round(10.44))
console.log(Math.floor(10.54), Math.ceil(10.54),Math.trunc(10.54))
console.log(Math.PI)

console.log(Math.pow(10,3))
console.log(Math.sqrt(4))

console.log("----")
for(i=1; i<=5; i++){
  console.log( Math.ceil( Math.random()*3 ))
}

var arr_str = ['홍길순','길순이','동길이','강감찬','이순신']
console.log(arr_str)

var rn = Math.floor( Math.random()*5 ) // 0-4 난수발생
console.log(arr_str[rn])

