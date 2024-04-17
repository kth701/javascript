
var userName = prompt("방문자의 이름?","")

console.log(userName)

if (userName){
  document.write(`${userName}님 반갑습니다! 방문을 환영합니다.`)
} else {
  document.write("방문자 이름을 입력해주세요!!!")
}
