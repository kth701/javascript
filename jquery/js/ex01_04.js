$(function(){ 
  // 요소 중 '내용1' 텍스트를 포함하는 요소
  //$('.inner_1 p:contains(내용1)').css('background-color','#ff0')
  // 선택한 하위요소의 텍스트와 태그 노드
  //$('.inner_1').contents().css('background-color','#ff0')
  // 선택한 요소중 특정요소를 포함하는 요소
  //$('.inner_1 p:has(strong)').css('background-color','#ff0')
  // 선택한 요소중 특정요소를 제외
  //$('.inner_2 p').not(':first').css('background-color','#ff0')
  //$('.inner_2 p').not(':nth-child(2)').css('background-color','#ff0')
  // :nth-child(위치), .eq(index번호)
  //$('.inner_2 p').eq(2).css('background-color','#ff0')
  // 인덱스를 선택하기 전의 선택자 적용
  $('.inner_2 p').eq(2).end().css('background-color','#ff0')

  // find(): 수직방향(하위요소), filter(): 형제선택자 (수평방향)
  //$('.inner_1 .txt1').css('border', '1px solid red')
  var inner_1 =  $('.inner_1')
  inner_1.find('.txt1').css('border', '1px solid red')

  // 1.형제 노드 탐색 => $('.inner_2 p:nth-child(2)').css('color', 'red')
  var inner_2 = $('.inner_2 p')
  //inner_2.filter(':nth-child(2)').css('color', 'red')
  
  // 2.특정조건에 부합되는 요소만 스타일 적용
  inner_2.filter( function(idx, obj) {
    console.log(idx, obj)
    return idx%2 == 0 // true인 객체만 반환
  }).css('color','green')

  // 배열.map()  : x -> x , 배열.filter() : x -> n
  
  var rs1 = $('.inner_2 p').eq(2).is(":visible")
  console.log(':visible=>',rs1)
  var rs2 = $('.inner_2 p').eq(3).is(":visible")
  console.log(':visible=>',rs2)

  var rs3 = $('#chk1').is(":checked")
  console.log(':checked=>',rs3)
  var rs4 = $('#chk2').is(":checked")
  console.log(':checked=>',rs4)

  var name = $('.name').html()
  console.log(name)
  var age = $('.age').text()
  console.log(age)
  $('.name').html('<i>홍길동</i>') // .innerHTML = ''
  $('.age').text('<i>10</i>')

  //xxx.getAttribute('class'),xxx.getAttribute('class','b')
  var attr = $('.name').attr('class') // 속성값 읽기
  console.log(attr)
  $('.name').attr('id','name') // 속성값 설정
  $('.name').removeAttr('my') // 특정 속성 제거

  var imgSrc = $('.box5 img').attr('src') 
  console.log(imgSrc)
  // "images/math_img_1.jpg"
  // "~1.jpg"=>"~2.jpg"

  $('.box5 img').attr({
    'width': 150,
    'src': imgSrc.replace("1.jpg", "2.jpg"),
    'alt': '보'
  }).removeAttr('border')
  
  // addClass(), removeClass(), toggleClass(), hasClass()
  $('.box6 p:nth-child(1)').addClass('add')
  $('.box6 p:nth-child(2)').removeClass('block')
  var is_has1 = $('.box6 p:nth-child(1)').hasClass('add')
  var is_has2 = $('.box6 p:nth-child(2)').hasClass('block')
  console.log(is_has1, is_has2)
  $('.box6 p:nth-child(3)').toggleClass('to')
  $('.box6 p:nth-child(4)').toggleClass('to')

})
