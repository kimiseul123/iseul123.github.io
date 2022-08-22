$(document).ready(function(){
  /* 
  변수 지정하기
  문서의 높이를 계산하고 원하는  부분이 상단에서 얼마큼 떨어져 있는지 offset 값 계산하기
  스크롤 과 클릭 이벤트 작성 
  */
  var btt=document.querySelector('#back_to_top'),
      docElem=document.documentElement,
      scrollAmount;

      //스크롤 이벤트 추가
  window.addEventListener('scroll', function(){
    //scrollAmount=docElem.scrollTop;
    scrollAmount = this.pageYOffset;//페이지 세로의 거리

    console.log(scrollAmount);//콘솔창에 보이기
    if(scrollAmount> 300){
     //btt.classList.add('.visible');
     btt.className='visible';
    }else{
      btt.classList.remove('visible');
    }

  });
      //클릭이벤트 추가
  btt.addEventListener('click',function(e){
    e.preventDefault();//이벤트를 처리하지 않는 경우, 해당 이벤트에 대한 사용자의 기본동작을 실행하지 않도록 지정. a태그를 클릭하면 href를 통해서 이동하거나 맨 위로 올라가거나,새로고침 되거나 하는 동작을 막아줌
    var scrollInterval=setInterval(function(){
      if(scrollAmount !=0){
        window.scrollBy(0,-55)
      }else{
        clearInterval(scrollInterval)
      }
    },10);

  });
});