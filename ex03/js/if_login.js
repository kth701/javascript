
let id = "hong1234"
let pwd = "112233"

let user_id = prompt("아이디: ", "")
let user_pwd = prompt("비밀번호: ", "")

if (id == user_id) {// 아이디가 일치
  if (pwd == user_pwd){// 패스워드 일치
    document.write(`${user_id}님 반갑습니다.`)
  }else {// 패스워드 불일치
    alert("비밀번호가 일치하지 않습니다.")
    location.reload()
  }
} else {// 아이디 불일치
  alert("아이디가 일치하지 않습니다.")
  location.reload();// 새로고침 (f5)
}

