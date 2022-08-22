$(document).ready(function() {
   //언어에 대한 선택메뉴 모션
   var ck1 = true, ck2 = true;
   $(".btn_lang").click(function(){
    if(ck2) {
       $(".lang_area").addClass("on"); 
       $(".lang_open").addClass("on"); 
       $(this).addClass("on");  
      
    } else {
       $(".lang_area").removeClass("on"); 
       $(".lang_open").removeClass("on"); 
       $(this).removeClass("on");    
    }
    ck2 = !ck2;
}); 

  });
