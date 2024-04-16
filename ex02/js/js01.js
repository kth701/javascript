/*
    변수: 단일 기억장소
    변수이름 규칙: 영자숫자특수문자(_) 혼영 가능
                    첫자는 영문자, _ 시작
                    키워드는 사용불가
    ex) a, a_01, _myName
    사용불가: 10_a, 1a, 키워드(var, let, for,...)
    상수: 기억장소에 넣을 값

    대입문(할당문)
    변수 = 상수
    변수 = 수식
    변수 = 변수
    */
   
    // 1. 변수 = 상수
    var a = 10  // a기억장소에 숫자10을 보관
    var b
    b = 20
    console.log(a, b)  // a기억장소의 값을 콘솔화면 출력

    a = 100
    a = 1000
    a = 3000
    a = 400
    b = 200
    console.log(a,b)

    var c = a + b // 2. 변수 = 수식
    console.log(c)

    console.log('a='+a,'b='+b)
    a = b // 3. 변수 = 변수
    console.log('a='+a,'b='+b)


