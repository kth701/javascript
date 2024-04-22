// 출력용 데이터 배열
const userList = [
  {id:1, name:'곰', address:'서울'},
  {id:2, name:'여우', address:'대전'},
  {id:3, name:'사자', address:'부산'},
]
//console.log('userList:', userList)

const container = document.querySelector('.container')
//console.log(container)

// container.innerHTML += '<br>홍길동<br>'
// container.innerHTML += '홍길순<br>'
// container.innerHTML += '동길이<br>'

// userList 배열의 각 요소별 루프 처리
userList.forEach( (userData) => {
  // console.log(userData.id, 
  //             userData.name,
  //             userData.address)

  // container.innerHTML += userData.id
  // container.innerHTML += userData.name
  // container.innerHTML += userData.address
  container.innerHTML += `
    <div class="card">
      <h2>${userData.name}</h2>
      <p>${userData.address}</p>
    </div>
  `

})
