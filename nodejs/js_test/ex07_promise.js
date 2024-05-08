// 비동기처리: 특정 코드의 실행이 완료될 때까지 기다리지 않고 
// 다음 코드를 먼저 수행한 특성

// 비동기화 Promise객체 사용: 인스턴스 = new Promise(비동기함수 or 비동기함수정의)
// Promise생성자 인자: 비동기처리 작업을 하는 함수를 지정(사용)
// 함수 내부에서 비동기 처리완료 메소드인 resolve()호출
// Promise인스턴스의 then()을 사용해 resolve()실행후의 작업을 처리

/*  1.
const promise = new Promise( (resolve)=>{
  // 비동기 함수 => setTimeout(수행할함수, 시간설정)
  var cnt = 0
  // setTimout()함수 호출(실행)
  setTimeout( ()=>{
    cnt++
    console.log('cnt:'+cnt)
    resolve('orange') // 비동기처리가 정상적으로 처리되었때 수행하는 함수
  },2000 ) // 3초후에 실행

  for (var i=0;i<5; i++){ console.log(i)}  // 3초동안 기다리지 않고 다음 문장을 계속 수행
})

// 비동기처리 객체가 정상적으로 수행되면 then()호출
promise.then( (value)=> {
  console.log(value)
})

*/

/*
// 2.
console.log('--- resolve()=>then(), reject()=>catch()')
new Promise( (resolve, reject)=> {
  let flag = false

  if (flag === true)
    resolve('orange') // 정상처리일 경우 호출
  else 
    reject('apple') // 비정상 처리일 경우 호출
})
.then((result)=> console.log(result))
.catch((result)=>{
  console.log(result)
})
*/


// Promise.all(배열) : 다수의 Promise병렬 실행
console.log('--- Promise 병렬처리: Promise여러개를 처리')
const arrFunc = [] // 생성된 Promise객체 저장하기 위한 배열

// 5개의 Promise객체 생성
for (let i=0; i<5; i++){

  // 형식:  const 함수식이 저장되는 변수 = 함수식 정의
  const func = (resolve)=> {
    console.log(`처리 ${i} 시작`, new Date().toLocaleTimeString())
    const delayMsec = 2000 * Math.random() // 2초

    // 비동기식 처리하는 함수실행(호출)
    setTimeout( () => { // 지연 처리`
      console.log(`처리 ${i}시작`,new Date().toLocaleTimeString() )
      resolve() // 비동기식 처리 내용이 정상처리 되었음 알리는 함수
    }, delayMsec) 

  } // end func()

  // 비동기식 처리하는 함수객체를 배열에 저장
  arrFunc.push(func) // [0],[1],...[4]
}

console.log("--> 배열에 저장되어 있는 비동기식함수")
console.log(arrFunc)


// 비동기함수 저장 배열 => Promois객체로 전환하여 배열에 저장
const arrPromise = arrFunc.map( (func)=> new Promise(func))
console.log("--> Promise배열로 전환")
console.log(arrPromise)

// 병렬 처리 실행
console.log("--> Promise.all(여러개의 Promise객체) ")
Promise.all(arrPromise).then(()=>{
  console.log('모든 작업이 완료되었습니다.')
})





