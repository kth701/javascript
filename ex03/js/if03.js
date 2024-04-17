// 입력한 숫자가 양수, 0, 음수 판별
var number = prompt("숫자입력:",0)
console.log(number)

if (number>0)
  document.write("양수")
else if (number==0) // <=0 범위안에서 다시 조건처리
  document.write("영")
else // 0보다 작은 값의 범위
  document.write("음수")


/*
// 메시지 창: alert("메시지")
// alert("메시지 창입니다.")

// 입력 창 : prompt("메시지","값")
// 판별 여부 창: confirm("메시지")
// 확인버튼: true, 취소버튼: false
var isOK = confirm("정말로 회원을 탈퇴하시겠습니까?")
console.log(isOK)

if (isOK){
  document.write("탈퇴 처리하였습니다.")
} else {
  document.write("탈퇴 취소하였습니다.")
}
*/




/*
// 입력한 숫자가  3의 배수이고 6의배수인 숫자 판별하기
var num = prompt("숫자 입력:",0)

console.log(num, num/3, num%3)

if (num%3 == 0 && num%6 == 0) 
  document.write(`숫자 ${num}은 3의배수이고 6의배수입니다.`)
else 
  document.write(`숫자 ${num}은 3의배수이면서 6의배수인 숫자가 아닙니다. `)
*/