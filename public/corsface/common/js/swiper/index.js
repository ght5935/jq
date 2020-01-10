
function InitSwiper(){

   this.createSwiper=function(){
     var mySwiper =new Swiper('.swiper-container', {
      direction: 'horizontal',
      // freeMode : false,
      // loop: true,
      // loopAdditionalSlides : 1,
      // loopedSlides: 1,
      loopFillGroupWithBlank: true,
      speed:1500,
  
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
  
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  
      // 如果需要滚动条
      scrollbar: {
        el: '.swiper-scrollbar',
      },
  
      // 自动播放
      autoplay:{
        delay: 4000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      }
    })
    return mySwiper ;
   }
}

