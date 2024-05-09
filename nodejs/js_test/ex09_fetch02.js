

// 1.
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then( (resp) => resp.json())
//   .then( (data) => console.log(data))

// 2. 
const getData = async ()=>{
  try{
    // REST API방식으로 Data 요청
    const resp = await fetch("https://jsonplaceholder.typicode.com/users") //console.log("resp=> "+ resp) // Object
    const data = await resp.json() // json구조로 전환 //console.log(data)
    
    data.forEach(item => {
      //console.log(item)
      // for (변수 of 배열), for (키 in json객체)

      console.log("------")
      for (let key in item ){
        
        // value값이 object이면 처리
        if (typeof item[key] === 'object'){
          console.log(`${key}값은 data가 아닌 객체입니다.`)

          let item2 = item[key] //console.log(key)
          for (let key2 in item2) 
            console.log(`${key}:${key2}=>${item2[key2]}`) 
        } else { //  value가 데이터이면
          console.log(`${key}=>${item[key]}`) //  item.key == item[key]
        }

      }

    });
  } catch(e){
    console.log(`error: ${e}`)
  }

}
getData() // 함수 실행
