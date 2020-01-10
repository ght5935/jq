/*
  使用方法: 1.引入navbar index.js和 index.class;
           2. 生成Navbar实例，调用Navbar.init();
*/

function footer() {
  var footerModal =
    ' <footer class="footer">' + '<div class="row">' + '<div class="col-lg-6 col-xs-12 ">' +
    '   <ul class="footer_left">' +
    '     <li><img src="/assets/footer/logo.png" /></li>' +
    '  <li>上海考斯信息技术有限公司</li>' +
    '     <li><img src="/assets/footer/code.png"/></li>' +
    '     <li>地址:上海市杨浦区国定东路200号3号楼3楼</li>' +
    '     <li>©️ 2018 Shanghai Corsface Information Technology Co,Ltd.&nbsp;|&nbsp;<a href="http://beian.miit.gov.cn/" target="_blank" style="color: #707070;">沪ICP备18014555号</a></li>' +
    '   </ul>' + '</div>' +
    '<div class="col-lg-3 col-lg-offset-3 col-xs-12">' +
    '<table cellpadding="100" class="footer_right">' + '<tr>' + '<td>联系我们  </td>' + '<td></td>' + '</tr>' +
    '<tr>' + '<td>商务合作:</td>' + '<td style="height:83px"> <img src="/assets/footer/mail_icon.png"/> <span>business@corsface.com</span><br/> <span class="phone"><img src="/assets/footer/tel_icon.png"/> 021-65686238</span></td>' + '</tr>' +
    '<tr>' + '<td>售后支持:</td>' + '<td> <img src="/assets/footer/mail_icon.png"/> support@corsface.com</td>' + '</tr>' +
    '<tr>' + '<td>代理申请:</td>' + '<td> <img src="/assets/footer/mail_icon.png"/> comercial@corsface.com</td>' + '</tr>' +
    '<tr>' + '<td>人才招聘:</td>' + '<td> <img src="/assets/footer/mail_icon.png"/> hr@corsface.com</td>' + '</tr>' +
    '</table>' + '</div>' + '</div>' +

    '</footer>';


  return footerModal;

}

function mobileFooter() {
  var mobileFooterModal = ' <footer class="mobile_footer">' +
    '<div>' +
    '   <ul class="mobile_left">' +
    '     <li><img src="/assets/footer/logo.png" /></li>' +
    '     <li>上海考斯信息技术有限公司</li>' +
    '     <li><img src="/assets/footer/code.png"/></li>' +
    '   </ul>' +
    '<p>联系我们</p>'
    + '<table cellpadding="100" class="mobile_right">' +
    '<tr>' + '<td>商务合作:</td>' + '<td style="height:70px"> <img src="/assets/footer/mail_icon.png"/> <span>business@corsface.com</span><br/> <span class="phone"><img src="/assets/footer/tel_icon.png"/> 021-65686238</span></td>' + '</tr>' +
    '<tr>' + '<td>售后支持:</td>' + '<td> <img src="/assets/footer/mail_icon.png"/> support@corsface.com</td>' + '</tr>' +
    '<tr>' + '<td>代理申请:</td>' + '<td> <img src="/assets/footer/mail_icon.png"/> commercial@corsface.com</td>' + '</tr>' +
    '<tr>' + '<td>人才招聘:</td>' + '<td> <img src="/assets/footer/mail_icon.png"/> hr@corsface.com</td>' + '</tr>' +
    '</table>' + '<p>地址:上海市杨浦区国定东路200号3号楼3楼</p>' +
    '<p>©️ 2018 Shanghai Corsface Information Technology Co,Ltd.|<a href="http://beian.miit.gov.cn/" target="_blank" style="color: #707070;">沪ICP备18014555号</a></p>'
    + '</div>' + '</footer>';

  return mobileFooterModal;
}
