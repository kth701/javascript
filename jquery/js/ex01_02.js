  
    $(function(){
      //$('#menu li:first').css('background-color','#0ff')
      //$('#menu li:last').css('background-color','#0ff')
      //$('#menu li').last().css('background-color','#0ff')
      //$('#menu li:odd').css('background-color','#0ff')
      //$('#menu li:even').css('background-color','#0ff')
      //$('#menu li').eq(2).css('background-color','#0ff')
      //$('#menu li:lt(2)').css('background-color','#0ff')
      //$('#menu li:gt(2)').css('background-color','#0ff')
      //$('#menu li:nth-child(2n+1)').css('background-color','#0ff')
      //$('#menu li:first-of-type').css('background-color','#0ff')
      $('#menu li').slice(1,3).css('background-color','#0ff')

      // 배열.forEach( ()=>{})
      //$.each(배열,수행할 내용)
      const arr = $('#menu li') // 배열구조
      //console.log(arr)
      $.each(  $('#menu li'), function(idx,o){
        //console.log(idx, o)
        console.log(idx, $(this))
      })
      $(arr).each(function(idx, obj){
        //console.log(idx, $(this))
        console.log(idx, obj)
      })
      $(arr).each((idx, obj)=>{
        console.log(idx, obj)
      })

      // $.map() : 반복수행하고 새열에 저장하고 반환, 
      // $.grep(): 반복수행하고 인덱스오름차순으로 배열의 데이터 불러옴
      const info = [ 
        {"area":"서울","name":"홍길동"},
        {"area":"부산","name":"홍길동1"},
        {"area":"대전","name":"홍길동2"}
        ]
      
      const info2 = $.map( info, (a,b)=>{
        console.log("-- $.map()")
        console.log(a,b)
        if (a.area == '서울') return a
      })
      console.log('area:', info2)

      const info3 = $.grep( info, (a,b)=>{
        console.log("-- $.grep()")
        //console.log(a,b)
        if (a.area == '서울')
            return true
        else 
            return false
      })
      console.log('area:', info3)

      // 선택자의 인텍스 추출
      const idx = $('#menu li').index($('#item'))
      console.log('idx=',idx)


    })
  