// 문자열 나누기
console.log("-- .split('문자'): 특정문자를 기준으로 분리해서 배열구조로 반환")
const myUrl = "http://example.com/?id=12345&name=Lion&age=28"
// 특정 문자를 기준으로 분리하여 배열구조전환
const url_arr =  myUrl.split('&') 
console.log(myUrl,"&문자를 기준로 분해")
console.log(url_arr)

// 변수 = 데이터
// 배열 참조형변수 = 주소

// console.log(url_arr[0])
// console.log(url_arr[1])
// console.log(url_arr[2])


console.log("-- 확장 for...of : 배열객체(구조)")
for (var value of url_arr){
  console.log(value)
}
console.log("-- 배열객체.forEach(화살표 함수표현이 가능)")
url_arr.forEach((value)=>{ console.log(value)})

console.log("-- for")
for (i=0; i<url_arr.length; i++){
  console.log(url_arr[i])
}

console.log("-- url2")
var url_arr2 = myUrl.split(/&|\?/)
url_arr2.forEach( v => console.log(v))

// 인수에 공백('')을 지정하면 한 글자식 분리하여 배열로 반환
console.log( 'javascript'.split(''))

// 정규식 표현=> /패턴/.test(문자열)=> true/false
// 전화번호 패턴 형식
console.log('-- 정규식 표현')
console.log('1', /\d{3}-\d{4}-\d{4}/.test('010-1234-1234'))
console.log('2', /\d{3}-\d{4}-\d{4}/.test('0210-1045-1234'))

console.log( '/j/',/j/.test('javascript') )
console.log( '/^iP/', /^iP/.test('javascript') )
console.log( '\\d',/\d/.test('javascript') )

console.log( '/java.*/',/java.*/.test('javascript') )

// 소수점 자리수 지정
var num1 = (0.355333).toFixed(2)
console.log( num1, typeof(num1)) //"0.36"
console.log( (2.4).toFixed(4))
console.log( (0.3555333333).toPrecision(2))

// 문자열 URI 이스케이프(escape)처리
var url3 = 'http://example.com/?name=길순&age=3&홍길동페이지.html'
var url3_ecode1 = encodeURI(url3) // "/?&=+:@$;,#" 처리하지않음
var url3_ecode2 = encodeURIComponent(url3)

console.log(url3)
console.log(url3_ecode1) // 인코딩된 문자
console.log(url3_ecode2)

var decode1 = decodeURI(url3_ecode1) //디코딩
var decode2 = decodeURIComponent(url3_ecode2)
console.log(decode1)
console.log(decode2)

