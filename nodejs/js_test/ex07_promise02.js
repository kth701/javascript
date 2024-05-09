// Promise직렬 처리하기
// 외부 데이터를 가져와 후속 처리 작업에 사용할 경우
// Promise => await, async

/*
Promise.resolve()
  .then(()=>{
    new Promise((resolve)=>{
      setTimeout(()=>{
        console.log('첫번째 Promoise',new Date().toLocaleTimeString())
        resolve()
      }, 3000)
    })
  })
  .then(()=>{
    new Promise((resolve)=>{
      setTimeout(()=>{
        console.log('두번째 Promoise',new Date().toLocaleTimeString())
        resolve()
      }, 1000)
    })
  })
*/

// Await와 async적용시
console.log('-- Await, async')

start() // 함수 호출

async function start(){

  // await : Promise가 끝날 때까지 기다리라는 뜻
  await new Promise((resolve)=>{
    setTimeout(()=>{
      console.log('첫번째 Promoise',new Date().toLocaleTimeString())
      resolve()
    }, 3000)
  })

  await new Promise((resolve)=>{
    setTimeout(()=>{
      console.log('두번째 Promoise',new Date().toLocaleTimeString())
      resolve()
    }, 1000)
  })


}


  