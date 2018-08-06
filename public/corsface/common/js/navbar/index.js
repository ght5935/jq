/*
  使用方法: 1.引入navbar index.js和 index.class;
           2. 生成Navbar实例，调用Navbar.init();
*/

function Navbar() {
  this.el = null;
  this.op = null;
  this.className = 'headroom';
  this.background = 'rgba(0,0,0,0)';
  this.scrollTop = 0;
  this.scrollOpacity = true;
  var _this = this;


  this.init = function (el, op, background) {
    this.el = el;
    this.op = op;
    this.background = background;

    // 当页面初始化的时候，判断滚动位置，如果大于1000，背景颜色给定值
    if ($(document).scrollTop() > 1000) {
      this.background = 'rgba(0,0,0,.7)';
    }
    // 通过是否传入background 值， 判断是否需要固定导航栏颜色；
    if (background) {
      this.scrollOpacity = false;
    } else {
      this.handleScroll();
    }
    this.className = op && op.classes && op.classes.initial ? op.classes.initial : this.className;
    this.createDom();
  };
  this.createDom = function () {
    var nav = '<header style="background: ' + this.background + '" id="' + this.el + '" class="' + this.className + '">' +
      ' <div class="nav-content-pc">' +
      '   <span class="nav-logo-pc"><img src="/corsface/assets/navbar/logo.png"/></span>' +
      '   <ul class="nav-items-pc">' +
      '     <li data-key="0" onclick="window.location.href=\'/corsface/pages/index/index.html?page=0\'"><a href="javascript:;">首页</a></li>' +
      '     <li data-key="1" ><a href="javascript:;">产品</a></li>' +
      // '     <li><a href="/pages/skill/index.html?page=2">技术</a></li>' +
      '     <li data-key="2"><a href="javascript:;">方案</a></li>' +
      '     <li data-key="3" onclick="window.location.href=\'/corsface/pages/case/index.html?page=3\'"><a href="javascript:;">案例</a></li>' +
      '     <li data-key="4" onclick="window.location.href=\'/corsface/pages/about/index.html?page=4\'"><a href="javascript:;">关于</a></li>' +
      '   </ul>' +
      ' </div>' +
      '</header>' +
      '<header class="nav-mobile">' +
      '  <div class="nav-content-mb">' +
      '   <div class="navBtn" id="nav" onclick="navClick(this)">' +
      '     <em></em>' +
      '     <em></em>' +
      '     <em></em>' +
      '   </div>' +
      '   <span class="nav-logo-mb"><img src="/corsface/assets/navbar/logo.png"/></span>' +
      '  </div>' +
      '</header>' +
      '   <ul id="nav-mobile-list" class="nav-items-md">' +
      '     <li><a href="/corsface/pages/index/index.html?page=0">首页</a></li>' +
      '     <li><a href="/corsface/pages/product/faceidentification/index.html?page=1">产品</a></li>' +
      // '     <ul></ul>'+
      // '     <li><a href="/pages/skill/index.html?page=2">技术</a></li>' +
      '     <li><a href="/corsface/pages/scheme/index.html?page=2&type=0">方案</a></li>' +
      '     <ul><li>ewew</li></ul>' +
      '     <li><a href="/corsface/pages/case/index.html?page=3">案例</a></li>' +
      '     <li><a href="/corsface/pages/about/index.html?page=4">关于</a></li>' +
      '   </ul>'
    $('body').prepend(nav);
    var navPcItems = document.querySelectorAll('.nav-items-pc li');
    var i = getQueryString('page');
    if (!i)
      i = 0;
    $(navPcItems[i]).addClass('nav-items-active');
    // 给导航栏添加headroom特效
    var myElement = document.querySelector("#" + _this.el);
    // construct an instance of Headroom, passing the element
    var headroom = new Headroom(myElement, {
      // 在元素没有固定之前，垂直方向的偏移量（以px为单位）
      'offset': 1000,
      // scroll tolerance in px before state changes
      'tolerance': 5
    });
    // initialise
    headroom.init();
    $('.nav-items-pc li').hover(function () {
      var key = $(this).attr('data-key');
      if (key == '1' || key == '2') {
        var list = createSubList(key);
        $(this).append(list);
        $(list).before('<div class="arrow"></div>');
        $('#subList').slideDown('normal');
      }
    }, function () {
      var key = $(this).attr('data-key');
      $('#subList').remove();
      $('.arrow').remove();
    })

  };
  this.handleScroll = function () {
    if (this.scrollOpacity) {
      $(window).scroll(function (e) {
        if ($(document).scrollTop() < 1000) {
          var opacity = $(document).scrollTop() / 1000 > 0.7 ? 0.7 : $(document).scrollTop() / 1000;
          _this.background = 'rgba(0,0,0,' + opacity + ')';
          $('#' + _this.el).css({ 'background': _this.background });
        } else {
          _this.background = 'rgba(0,0,0,.7)';
          $('#' + _this.el).css({ 'background': _this.background });
          // _this.createDom();
        }
        _this.scrollTop = $(document).scrollTop();
      });
    }
  }

}

function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var reg_rewrite = new RegExp("(^|/)" + name + "/([^/]*)(/|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  var q = window.location.pathname.substr(1).match(reg_rewrite);
  if (r != null) {
    return unescape(r[2]);
  } else if (q != null) {
    return unescape(q[2]);
  } else {
    return null;
  }
}

function navClick(obj) {
  if (obj.classList.value === 'navBtn') {
    obj.className = 'navBtn open';
    $('body').animate({ left: '4rem' });
    $('.nav-logo-mb img').animate({ left: '70%' })
    // $('html').css({overflow: 'hidden'})
    $('#nav-mobile-list').animate({ left: '0' });

  } else {
    obj.className = 'navBtn';
    $('body').animate({ left: '0' });
    $('.nav-logo-mb img').animate({ left: '50%' })
    // $('html').css({overflow: 'none'})
    $('#nav-mobile-list').animate({ left: '-4rem' });

  }
};


function createSubList(key) {
  var subLists = [];
  var sub = '';
  var list = document.createElement('div');
  $(list).attr('id', 'subList');
  
  switch (key) {
    case '1':
      $(list).addClass('sublist row')
      subLists = ['单兵蹲守系统', '车辆识别系统', '视频分析系统', '人脸识别系统'];
      var fileName = ['singlepawn', 'caridentification', 'videoanalysis', 'faceidentification']
      for (var i = 0; i < subLists.length; i++) {
        var liNode = document.createElement('a');
        // var aNode = document.createElement('a');
        $(liNode).attr('href', '/corsface/pages/product/' + fileName[i] + '/index.html?page=1')
        liNode.innerHTML = subLists[i];
        $(liNode).addClass('subItems');
        // $(liNode).append(aNode);
        list.appendChild(liNode);
      }
      break;
    case '2':
      $(list).addClass('sublist-scheme row')
      subLists = ['重大会议保障系统', '蹲守布控系统', '封闭场所布控', '网格化布控系统', '多级连网布控系统', '全方位布控系统', '人脸识别门禁系统', '移动端人脸识别系统', '动态车辆识别系统', '视频文件人脸检索系统'];
      for (var i = 0; i < subLists.length; i++) {
        var liNode = document.createElement('a');
        // var aNode = document.createElement('a');
        $(liNode).addClass('col-lg-6')
        $(liNode).attr('href', '/corsface/pages/scheme/index.html?page=2&type=' + i)
        liNode.innerHTML = subLists[i];
        $(liNode).addClass('subItems');
        // $(liNode).append(aNode);
        list.appendChild(liNode);
      }
      break;
  }

  return list;

}

// $('nav-items-pc li').click(function(event){
//   event.stopPropagation();
//   var key = $(this).attr('data-key');
//   console.log(key)
//   // switch ()
//   // window.location.href=\'/corsface/pages/index/index.html?page=0\'
// })
