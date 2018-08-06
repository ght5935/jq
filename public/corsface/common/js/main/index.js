
//判断一个是数是小数还是整数 ；
function intOrFloat(i) {
  return (i / 2).toString().split('.').length === 1 ? true : false;
}

function createImgAndIntroduce(arr) {
  var imgDiv = [];
  for (var i = 0; i < arr.length; i++) {
    if (intOrFloat(i)) {
      imgDiv.push('<div class="animes" >' + '<img class="img" id= ' + arr[i].id + ' src=' + arr[i].imgUrl + ' /> ' + ' <span class="imgText" id= ' + arr[i].textContent + ' >' + arr[i].introduce + '</span>' + ' </div>');
    } else {
      imgDiv.push('<div class="animes" >' + ' <span class="imgText" id=' + arr[i].textContent + ' >' + arr[i].introduce + '</span>' + '<img class="img" id=' + arr[i].id + ' src=' + arr[i].imgUrl + ' /> ' + ' </div>');
    }
  }
  return imgDiv;
}

function getScrollHeight(id) {
  var str = '#' + id;
  var X = $(str).offset().top;
  var t = document.documentElement.scrollTop || document.body.scrollTop;
  var h = document.documentElement.clientHeight || document.body.clientHeight;
  if (t + h > X + 391.7) {
    return true;
  }
  return false;
}

function createIconAndText(arr) {
  var imgContent=[];
  // imgContent=arr.map(v=>
  //   '<div>' +
  //       ' <img src=' + v.url + ' /> ' +
  //       ' <p>' + v.content + '</p>' +
  //       ' </div> '
  // )
  if (arr[0].desc === undefined) {
    for (var i = 0; i < arr.length; i++) {
     imgContent.push( '<div class="col-lg-2 col-xs-12">' +'<div>'+
        ' <img src=' + arr[i].url + ' /> ' +
        ' <p class="icon_p">' + arr[i].content + '</p>' +'</div>'+
        ' </div> ')
    }

  } else {
    if(arr.length===4){
      for (var i = 0; i < arr.length; i++) {
        imgContent.push( '<div class="col-lg-2 col-xs-12">' +'<div class="icon_part4_div">'+
           ' <img src=' + arr[i].url + ' /> ' +
           ' <p class="icon_desc4_p">' + arr[i].content + '</p>' +
           ' <span>' + arr[i].desc + '</span>' +'</div>'+
           ' </div> ')
       }
    }else{
      for (var i = 0; i < arr.length; i++) {
        imgContent.push( '<div class="col-lg-2 col-xs-12">' +'<div class="icon_part4_div">'+
           ' <img src=' + arr[i].url + ' /> ' +
           ' <p class="icon_desc_p">' + arr[i].content + '</p>' +
           ' <span>' + arr[i].desc + '</span>' +'</div>'+
           ' </div> ')
       }
    }

  }
  return imgContent;
}
function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
function throttle(func, wait, mustRun) {
  var timeout,
    startTime = new Date();

  return function () {
    var context = this,
      args = arguments,
      curTime = new Date();

    clearTimeout(timeout);
    // 如果达到了规定的触发时间间隔，触发 handler
    if (curTime - startTime >= mustRun) {
      func.apply(context, args);
      startTime = curTime;
      // 没达到触发间隔，重新设定定时器
    } else {
      timeout = setTimeout(func, wait);
    }
  };
};


function AnimesFun() {
  this.init = function () {
    window.addEventListener('scroll', throttle(function () {
      var animes = document.querySelectorAll('.img');
      var textContent = document.querySelectorAll('.imgText');
      for (var i = 0; i < animes.length; i++) {
        if (intOrFloat(i)) {
          if (getScrollHeight(animes[i].id)) {
            var cssSelector = anime({
              targets: "#" + animes[i].id,
              translateX: getScreenWidth(),
              opacity: 1,
              duration: 1500,
              easing: 'easeOutExpo'
            });
          }
        } else {
          if (getScrollHeight(animes[i].id)) {
            var cssSelector = anime({
              targets: "#" + animes[i].id,
              translateX: '-' + getScreenWidth(),
              opacity: 1,
              duration: 1500,
              easing: 'easeOutExpo'
            });
          }
        }

      }
      for (var i = 0; i < textContent.length; i++) {
        if (intOrFloat(i)) {
          if (getScrollHeight(textContent[i].id)) {
            var selector = anime({
              targets: "#" + textContent[i].id,
              translateX: '-' + getScreenWidth(),
              opacity: 1,
              duration: 1500,
              easing: 'easeOutExpo'
            });
          }
        } else {
          if (getScrollHeight(textContent[i].id)) {
            var selector = anime({
              targets: "#" + textContent[i].id,
              translateX: getScreenWidth(),
              opacity: 1,
              duration: 1500,
              easing: 'easeOutExpo'
            });
          }
        }

      }
    }, 100, 500), false)
    
  }
}

function getScreenWidth() {
  var screenWidth = document.documentElement.clientWidth || document.body.clientWidth;
  var percent = null;
  if (screenWidth < 750) {
    percent = '17%';
  } else {
    percent = '60%'
  }
  return percent;
}

function getScreen(){
  return document.documentElement.clientWidth || document.body.clientWidth;
}