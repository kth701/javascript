// 비동기처리: 특정 코드의 실행이 완료될 때까지 기다리지 않고 
// 다음 코드를 먼저 수행한 특성

// 비동기화 Promise객체 사용
// Promise생성자 인자: 비동기처리 작업을 하는 함수를 지정(사용)
// 함수 내부에서 비동기 처리완료 메소드인 resolve()호출
// Promise인스턴스의 then()을 사용해 resolve()실행후의 작업을 처리

// const promise = new Promise( (resolve)=>{
//   setTimeout( ()=>{
//     resolve('orange')
//   },1000 )
// })
// promise.then( (value)=> {
//   console.log(value)
// })


// new Promise( (resolve, reject)=> {
//   let flag = false

//   if (flag === true)
//     resolve('orange')
//   else 
//     reject('apple')
// })
// .then((result)=> console.log(result))
// .catch((result)=>{
//   console.log(result)
// })

// Promise.all(배열) : 다수의 Promise병렬 실행
const arrFunc = []
for (let i=0; i<5; i++){

  const func = (resolve)=> {
    console.log(`처리 ${i} 시작`, new Date().toLocaleTimeString())
    const delayMsec = 2000 * Math.random() // 2초

    setTimeout( () => { // 지연 처리`
      console.log(`처리 ${i}시작`,new Date().toLocaleTimeString() )
      resolve() // 코드가 정상처리 
    }, delayMsec)
  } // end func()

  // 배열에 저장
  arrFunc.push(func) // [0],[1],...[4]
}

console.log("--> 저장된 배열")
console.log(arrFunc)


// 함수를 포함한 배열을 Promise배열로 변환
const arrPromise = arrFunc.map( (func)=> new Promise(func))
console.log("--> Promise배열로 전환")
console.log(arrPromise)

// 병렬 처리 실행
Promise.all(arrPromise).then(()=>{
  console.log('모든 작업이 완료되었습니다.')
})






