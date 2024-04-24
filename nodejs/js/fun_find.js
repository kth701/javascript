// 화살표함수: 콜백함수 활용 => (인자:함수)
const Arr = ['홍길동','홍길순','동길이','홍길동']
// 함수(매개변수,...) { }
// 함수(인자값,...)
// 배열.find( 콜백함수 조건에 맞는 첫번째 요소을 반환)
const find_result = Arr.find( (v) => v == '홍길동')
console.log('자료가 없을 경우 null: ',find_result )



