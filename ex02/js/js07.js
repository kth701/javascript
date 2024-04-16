/*
체중 상태 알아보기
철수의 신장: 180
철수의 체중: 74

적정 체중 = (본인 신장 - 100) x 0.9

적정체중 72인 경우
결과 판별 : 적정 체중 2초과

*/

let userH,userW, userName
userName = prompt("이름:","")
userH = prompt("신장:","0")
userW = prompt("체중:","0")

let avgW = (userH - 100) * 0.9

// console.log(userName)
// console.log("신장:"+userH+"cm")
// console.log("체중:"+userW+"kg")
// console.log("적정 체중:"+avgW+"kg")

// 백틱(`)으로 템플릿 리터럴 적용시: 표현식=> ${변수/연산}
document.write(`당신의 이름은 ${userName} 입니다. `)
document.write("<p>신장:"+userH+"cm</p>")
document.write("<p>체중:"+userW+"kg</p>")
document.write("<p>적정 체중:"+avgW+"kg</p>")

// (조건식) ? 참인경우 : (조건식2)? 참: 거짓
console.log( (userW>avgW) ? 
                (userW-avgW)+"초과": 
                    (userW<avgW) ? (avgW-userW)+"미달": "정상" )



