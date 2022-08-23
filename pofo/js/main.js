 $(document).ready(function(){
     //스킬 그그래프

       $('.gr_ps').delay(1000).animate({width: '95%'},2000);
       $('.gr_html').delay(1000).animate({width: '90%'},2000);
       $('.gr_ja').delay(1000).animate({width: '75%'},2000);
      $('.gr_jq').delay(1000).animate({width: '75%'},2000);

  
        //패럴럭스 스크롤링
        var wh = $(window).height();
        var wd = $(window).width();
        $(".sc_data").each(function(index){
            $(this).attr("data-val", index*wh); //1920*0 = 0, 1920*1, 1920*2 .... 이런식으로 계산되어 값을 저장
        });
        $(".sc_data").on("mousewheel DOMMouseScroll", function(e){
            var secPos = parseInt($(this).attr("data-val"));
            if(e.originalEvent.wheelDelta >= 0){
                $("html, body").stop().animate({scrollTop:secPos - wh});// 0 100% 200% 
                return false;
            } else if(e.originalEvent.wheelDelta < 0) {
                $("html, body").stop().animate({scrollTop:secPos + wh});
                return false;
            }
        }); 
     
     
 
    
      
     });
        