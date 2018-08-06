// (function (doc, win) {
//   // if(!document.cookie.cf_uname){
//   //   window.location.href = 'http://192.168.1.157:8090/cfAdmin';
//   // }  alert(document.cookie.cf_uname)
//   var docEl = win.document.documentElement;
//   var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
//   var refreshRem = function () {
//     var clientWidth = win.innerWidth
//       || doc.documentElement.clientWidth
//       || doc.body.clientWidth;

//     if (!clientWidth) return;
//     var fz;
//     var width = clientWidth;
//     fz = 16 * width / 375;
//     docEl.style.fontSize = fz + 'px';
//   };

//   if (!doc.addEventListener) return;
//   win.addEventListener(resizeEvt, refreshRem, false);
//   doc.addEventListener('DOMContentLoaded', refreshRem, false);
//   refreshRem();
// })(document, window);
(function(doc,win){  
  var docEl =doc.documentElement,  
          resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',  
          recalc = function(){  
              var clientWidth = docEl.clientWidth>750 ? 750 :docEl.clientWidth;  
              if (!clientWidth) {return};  
              docEl.style.fontSize = 100 * (clientWidth/750) + 'px';  
          };  
  recalc();  
  if (!doc.addEventListener) return;  
  win.addEventListener(resizeEvt, recalc, false);  
  doc.addEventListener('DOMContentLoaded', recalc, false);  
})(document,window) 