// API 통신 결과
class ApiResultData {  // 데이터를 구성할 수 있는 구조
  constructor(){
    this.result
    this.errorMessage
    this.userName
    this.age
  }
}

// response데이터 변환
function parseData(response) {
  console.log('response =>', response)

  const apiResultData = new ApiResultData()

  apiResultData.result = response.result
  apiResultData.errorMessage = response.error_message
  apiResultData.userName = response.user_name
  apiResultData.age = response.age

  console.log( apiResultData.userName, apiResultData.age)
}

const apiResponse = {
  result: true,
  user_name: '강감찬',
  age: 10,
  error_message: '정상처리됨.'
}

// 데이터 구조 확인
//console.log(apiResponse)

// 함수 호출(실행)
parseData(apiResponse)