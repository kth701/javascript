
// 테스트 형식 읽기
async function load() {
  const data = await fetch('sample.txt')
  const text = await data.text()

  console.log(text)
  
}
//load() //호출

// JSON형식 읽기
async function json_load(){
  const data = await fetch('sample.json')
  const json_data = await data.json()

  console.log(json_data)
  console.log(JSON.stringify(json_data, null, '  '))

}
// json_load()

// XML데이터 읽기
async function json_load2(){
  const data = await fetch('sample.xml')
  const text = await data.text() // 텍스트 형식
  // XML형식으로 해석
  const xml = new DOMParser().parseFromString(text, 'application/xml')

  console.log(text)
  document.querySelector('#log').innerHTML = text

}
// json_load2()

// XML데이터 읽기
async function image_load(){
  const data = await fetch('life.jpg')
  const blob = await data.blob() // blob 형식

  // img 요소 생성
  const image = new Image()
  image.src = URL.createObjectURL(blob)

  document.querySelector('#log').appendChild(image)

}
//image_load()
