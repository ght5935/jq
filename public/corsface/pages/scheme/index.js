$(document).ready(function () {

  //导航
  var navbar = new Navbar();
  navbar.init('nav');

  // 页脚
  $('body').append(footer());

  var type = getQueryString('type');
  var system = '';
  var advInner = '';
  
  //生成轮播图
  $('#banner').attr({ src: "../../assets/scheme/" + (Number(type) + 1) + "/banner.png" });
  $('#titleImg').attr({src: '../../assets/scheme/' + (Number(type) + 1) + '/title.png'})

  //生成系统介绍
  var spanText =[ '该系统提供重大会议及活动的管控重点区域人员出入卡口管理，是标准的软硬件快速部署系统。该系统以视频人像数据为基础，通过大数据监控平台，建立四级安全防范体系，实现实时人证合一验证，人脸数据建模，黑白名单比对，预警；同时，汇总各个终端上的验证记录和人员信息，提供报表及数据，为重大会议及活动提供最高级别的安全保障',
                  '该系统是集智能动态人脸分析与识别为一体的轻量化单机作战系统，依托高安全性、可靠性及便携性的专业定制主机和适应各类复杂场景的专用摄像头，灵活高效地实现对临时监视区域内人员的动态视频人脸识别分析，快速机动地支撑非常事件中的蹲守布控任务。借助此高科技系统，一线干警可极大地减轻工作强度及工作压力，提高蹲守布控的成功率。',
                  '该系统针对公共安全领域的封闭场所进行布控，采用业内领先的动态视频人脸识别算法，依托动态人脸检测、跟踪、识别及监控等技术手段，高效完成出去人员各项特征属性的记录并分析活动规律，同时提供多维度的信息检索及人员异常行为分析，实现日常人员与访客的分类行为管理，极大提升封闭场所的安保能力。',
                  '该系统内置视频监控系统智能化引擎，可将布控人群高速入库，借助动态视频人脸检测、跟踪、识别及监控等技术，通过进行事前、事中、事后人员信息分析，实现对重点监控人员的实时动态视频人脸识别分析、反查和报警，同时提供人员行动轨迹数据，适用于安全防范、嫌犯追踪、失踪人员查找等众多领域，满足社会公共安全对大规模动态视频人脸识别监控分析的网格化布控需求。',
                  '该系统针对公共安全领域的重点区域，依托大数据平台及云计算技术，多级联网布控重点区域内的场所封闭场所，在动态人脸检测、跟踪、识别及监控等技术手段的支撑下，搞笑记录各封闭场所出入人员的各项特征属性及活动规律，通过大数据云计算平台进行信息整合及多维分析，建立重点区域内监控人员的分级管理模型，对异常人员及异常行为实时触发预警，实现重点区域人员一站式管理，助力反恐维稳网络防控。',
                  '该系统从各级辖区安全管理的反恐维稳实际需求出发，对区域内重点监控人员进行全方位布控，在东台人脸检测、跟踪、识别及监控等技术手段的支撑下，通过实时对比人员信息、位置（场所）信息、轨迹信息，完成轨迹分析和时间侦测，及时出发各类报警，为国保、刑侦、情报、研判、指挥等各业务部门提供安全管理决策依据，提前预防处理，防患于未然，切实减少治安盲点。',
                  '为满足车站、码头、工厂、大厦、会场、企事业单位、小学、小区等对通道实现智能化安全管理的需求，考斯自主研发的一体化智能动态视频人脸识别门禁系统。人员持身份证可通过1：1比对识别自动通过门禁，也可现场动态采集人脸信息与本地预存人脸信息库白名单通过1：N比对识别进行身份核验。是新一代具有高安全性、高稳定性及高效率的自助门禁设备。',
                  '提供对视频文件中目标车辆的快速精准定位和识别。该系统支持多种类型视频文件的接入，通过对视频中车辆的检测和持续跟踪，截取连续的车辆图片序列进行识别，目前能精准识别出车辆的品牌、车系、类型、车牌、颜色等众多目标属性信息。视频车辆检索平台由车辆加速PC客户端和车辆识别服务端组成，用户在PC客户端上传、提交车辆视频文件，服务端提供车辆的识别技术和云端检索服务。',
                  '该系统以移动端应用程序为载体,部署于智能手机或平板电脑中,系统利用智能设备自带的摄像头,进行动态人脸采集及识别,并实时与存储在智能设备中的人员库进行比对,或与存储在云端服务器中的人员库进行后台比对,核验人员的身份信息,根据核验结果进行相应的后续处理。',
                  '该系统用于大量视频文件对人脸智能检索、精确定位、灵活利用的需求。系统将视频文件中的人脸进行分析识别并分类储存，在建立目标人物后直接与识别分类储存后的人脸进行比对，无需再与原视频文件进行比对。通过业界先进的时序比对方法及深度智能学习机制，不但将业务员人员从繁忙的人工比对中抽离出来，并且大幅度提高了识别的效率和准确率。']
  var pictureArr=[{id:'cssSelector0',imgUrl:"../../assets/scheme/" + (Number(type) + 1) + "/introduce.png",introduce:'<span></span><span>'+ spanText[Number(type)] +'</span>',textContent:'selector0'}]
  $(".introduce_text").text(spanText[Number(type)]);
  $('.introduce').append(createImgAndIntroduce(pictureArr));
  var animesInit =new AnimesFun();
  animesInit.init();

  //生成产品优势
  switch (type) {
    case '0':
      system = '<div class="title">应用场景</div>' +
        '<div class="content row">' +
        '<div class="colss col-lg-3 col-sm-12">' +
        '   <img src="../../assets/scheme/1/scene01.png" alt="">' +
        '   <p>环活动举办地交通道口</p>' +
        '</div>' +
        '<div class="colss col-lg-3 col-sm-12">' +
        '   <img src="../../assets/scheme/1/scene02.png" alt="">' +
        '   <p>会场周边生活区</p>' +
        '</div>' +
        '<div class="colss col-lg-3 col-sm-12">' +
        '   <img src="../../assets/scheme/1/scene03.png" alt="">' +
        '   <p>会场及驻地出入口</p>' +
        '</div>' +
        '<div class="colss col-lg-3 col-sm-12">' +
        '<img src="../../assets/scheme/1/scene04.png" alt="">' +
        '<p>会场核心区边界</p>' +
        '</div>' +
        '</div>';
        advInner = '<div class="colss col-lg-3 col-sm-12">' +
                   '  <img src="../../assets/scheme/1/advantage01.png" alt="">' +
                   '  <p>快速部署</p>'+
                   '</div>'+
                   '<div class="colss col-lg-3 col-sm-12">' +
                   '  <img src="../../assets/scheme/1/advantage02.png" alt="">' +
                   '  <p>安全可靠</p>'+
                   '</div>'+
                   '<div class="colss col-lg-3 col-sm-12">' +
                   '  <img src="../../assets/scheme/1/advantage03.png" alt="">' +
                   '  <p>开放易用</p>'+
                   '</div>'+
                   '<div class="colss col-lg-3 col-sm-12">' +
                   '  <img src="../../assets/scheme/1/advantage04.png" alt="">' +
                   '  <p>四级防范</p>'+
                   '</div>'

      break;
    case '1':
      system = '<div class="title">应用场景</div>' +
        '<div class="content row">' +
        '<div class="colss col-lg-4 col-sm-12">' +
        '   <img src="../../assets/scheme/2/scene01.png" alt="">' +
        '   <p>检验出入人员</p>' +
        '</div>' +
        '<div class="colss col-lg-4 col-sm-12">' +
        '   <img src="../../assets/scheme/2/scene02.png" alt="">' +
        '   <p>人流聚集布控</p>' +
        '</div>' +
        '<div class="colss col-lg-4 col-sm-12">' +
        '   <img src="../../assets/scheme/2/scene03.png" alt="">' +
        '   <p>临时场景安全监控</p>' +
        '</div>' +
        '</div>';
        advInner = '<div class="colss col-lg-3 col-sm-12">' +
                   '  <img src="../../assets/scheme/2/advantage01.png" alt="">' +
                   '  <p>专业便捷</p>'+
                   '</div>'+
                   '<div class="colss col-lg-3 col-sm-12">' +
                   '  <img src="../../assets/scheme/2/advantage02.png" alt="">' +
                   '  <p>机动布控</p>'+
                   '</div>'+
                   '<div class="colss col-lg-3 col-sm-12">' +
                   '  <img src="../../assets/scheme/2/advantage03.png" alt="">' +
                   '  <p>高效快速</p>'+
                   '</div>'+
                   '<div class="colss col-lg-3 col-sm-12">' +
                   '  <img src="../../assets/scheme/2/advantage04.png" alt="">' +
                   '  <p>敏捷适配</p>'+
                   '</div>'
      break;
    case '2':
      system = '<div class="title">应用场景</div>' +
        '<div class="content row">' +
        // '<div class="colss col-lg-4 col-sm-12">' +
        // '   <img src="../../assets/scheme/3/scene01.png" alt="">' +
        // '   <p>清真寺人员出入管理</p>' +
        // '</div>' +
        '<div class="colss col-lg-6 col-sm-12">' +
        '   <img src="../../assets/scheme/3/scene02.png" alt="">' +
        '   <p>人流聚集区出入管理</p>' +
        '</div>' +
        '<div class="colss col-lg-6 col-sm-12">' +
        '   <img src="../../assets/scheme/3/scene03.png" alt="">' +
        '   <p>社区、学校、党政机关等</p>' +
        '</div>' +
        '</div>';
        advInner = '<div class="colss col-lg-3 col-sm-12">' +
                   '  <img src="../../assets/scheme/3/advantage01.png" alt="">' +
                   '  <p>高效快速</p>'+
                   '</div>'+
                   '<div class="colss col-lg-3 col-sm-12">' +
                   '  <img src="../../assets/scheme/3/advantage02.png" alt="">' +
                   '  <p>灵活方便</p>'+
                   '</div>'+
                   '<div class="colss col-lg-3 col-sm-12">' +
                   '  <img src="../../assets/scheme/3/advantage03.png" alt="">' +
                   '  <p>提升管理</p>'+
                   '</div>'+
                   '<div class="colss col-lg-3 col-sm-12">' +
                   '  <img src="../../assets/scheme/3/advantage04.png" alt="">' +
                   '  <p>防患未然</p>'+
                   '</div>'
      break;
    case '3':
      system = '<div class="title">应用场景</div>' +
        '<div class="content row">' +
        '<div class="colss col-lg-4 col-sm-12">' +
        '   <img src="../../assets/scheme/4/scene01.png" alt="">' +
        '   <p>交通要道行人监控</p>' +
        '</div>' +
        '<div class="colss col-lg-4 col-sm-12">' +
        '   <img src="../../assets/scheme/4/scene02.png" alt="">' +
        '   <p>人流聚集区出入管理</p>' +
        '</div>' +
        '<div class="colss col-lg-4 col-sm-12">' +
        '   <img src="../../assets/scheme/4/scene03.png" alt="">' +
        '   <p>进、出口人员管理</p>' +
        '</div>' +
        '</div>';
        advInner = '<div class="colss col-lg-3 col-sm-12">' +
                   '  <img src="../../assets/scheme/4/advantage01.png" alt="">' +
                   '  <p>高效快速</p>'+
                   '</div>'+
                   '<div class="colss col-lg-3 col-sm-12">' +
                   '  <img src="../../assets/scheme/4/advantage02.png" alt="">' +
                   '  <p>灵活方便</p>'+
                   '</div>'+
                   '<div class="colss col-lg-3 col-sm-12">' +
                   '  <img src="../../assets/scheme/4/advantage03.png" alt="">' +
                   '  <p>提升管理</p>'+
                   '</div>'+
                   '<div class="colss col-lg-3 col-sm-12">' +
                   '  <img src="../../assets/scheme/4/advantage04.png" alt="">' +
                   '  <p>防患未然</p>'+
                   '</div>'
      break;
    case '4':
      system = '<div class="title">应用场景</div>' +
        '<div class="content row">' +
        // '<div class="colss col-lg-6 col-sm-12">' +
        // '   <img src="../../assets/scheme/5/scene01.png" alt="">' +
        // '   <p>清真寺人员出入管理</p>' +
        // '</div>' +
        '<div class="colss col-lg-12 col-sm-12">' +
        '   <img src="../../assets/scheme/5/scene02.png" alt="">' +
        '   <p>看守所、监狱人员管理</p>' +
        '</div>' +
        '</div>';
        advInner = '<div class="colss col-lg-3 col-sm-12">' +
                   '  <img src="../../assets/scheme/5/advantage01.png" alt="">' +
                   '  <p>高效快速</p>'+
                   '</div>'+
                   '<div class="colss col-lg-3 col-sm-12">' +
                   '  <img src="../../assets/scheme/5/advantage02.png" alt="">' +
                   '  <p>灵活方便</p>'+
                   '</div>'+
                   '<div class="colss col-lg-3 col-sm-12">' +
                   '  <img src="../../assets/scheme/5/advantage03.png" alt="">' +
                   '  <p>提升管理</p>'+
                   '</div>'+
                   '<div class="colss col-lg-3 col-sm-12">' +
                   '  <img src="../../assets/scheme/5/advantage04.png" alt="">' +
                   '  <p>防患未然</p>'+
                   '</div>'
      break;
    case '5':
      system = '<div class="title">应用场景</div>' +
        '<div class="content row">' +
        '<div class="colss col-lg-12 col-sm-12">' +
        '   <img src="../../assets/scheme/6/scene01.png" alt="">' +
        '   <p>“人工智能+”治安防控模式</p>' +
        '</div>' +
        '</div>';
        advInner = '<div class="colss col-lg-3 col-sm-12">' +
                   '  <img src="../../assets/scheme/6/advantage01.png" alt="">' +
                   '  <p>高效快速</p>'+
                   '</div>'+
                   '<div class="colss col-lg-3 col-sm-12">' +
                   '  <img src="../../assets/scheme/6/advantage02.png" alt="">' +
                   '  <p>灵活方便</p>'+
                   '</div>'+
                   '<div class="colss col-lg-3 col-sm-12">' +
                   '  <img src="../../assets/scheme/6/advantage03.png" alt="">' +
                   '  <p>提升管理</p>'+
                   '</div>'+
                   '<div class="colss col-lg-3 col-sm-12">' +
                   '  <img src="../../assets/scheme/6/advantage04.png" alt="">' +
                   '  <p>防患未然</p>'+
                   '</div>'
      break;
    case '6':
    system = '';
      advInner = '<div class="colss col-lg-3 col-sm-12">' +
                   '  <img src="../../assets/scheme/7/advantage01.png" alt="">' +
                   '  <p>高效快速</p>'+
                   '</div>'+
                   '<div class="colss col-lg-3 col-sm-12">' +
                   '  <img src="../../assets/scheme/7/advantage02.png" alt="">' +
                   '  <p>灵活方便</p>'+
                   '</div>'+
                   '<div class="colss col-lg-3 col-sm-12">' +
                   '  <img src="../../assets/scheme/7/advantage03.png" alt="">' +
                   '  <p>提升管理</p>'+
                   '</div>'+
                   '<div class="colss col-lg-3 col-sm-12">' +
                   '  <img src="../../assets/scheme/7/advantage04.png" alt="">' +
                   '  <p>防患未然</p>'+
                   '</div>'
      break;
      case '7':
      system = '<div class="title">应用场景</div>' +
                '<div class="content row">' +
                '<div class="colss col-lg-6 col-sm-12">' +
                '   <img src="../../assets/scheme/8/scene01.png" alt="">' +
                '   <p>考勤打卡</p>' +
                '</div>' +
                '<div class="colss col-lg-6 col-sm-12">' +
                '   <img src="../../assets/scheme/8/scene01.png" alt="">' +
                '   <p>警务巡逻及临检核验</p>' +
                '</div>' +
                '</div>';
        advInner = '<div class="colss col-lg-3 col-sm-12">' +
                     '  <img src="../../assets/scheme/8/advantage01.png" alt="">' +
                     '  <p>高效快速</p>'+
                     '</div>'+
                     '<div class="colss col-lg-3 col-sm-12">' +
                     '  <img src="../../assets/scheme/8/advantage02.png" alt="">' +
                     '  <p>灵活方便</p>'+
                     '</div>'+
                     '<div class="colss col-lg-3 col-sm-12">' +
                     '  <img src="../../assets/scheme/8/advantage03.png" alt="">' +
                     '  <p>提升管理</p>'+
                     '</div>'+
                     '<div class="colss col-lg-3 col-sm-12">' +
                     '  <img src="../../assets/scheme/7/advantage04.png" alt="">' +
                     '  <p>防患未然</p>'+
                     '</div>'
        break;
    case '8':
      system = '<div class="title">应用场景</div>' +
        '<div class="content row">' +
        '<div class="colss col-lg-6 col-sm-12">' +
        '   <img src="../../assets/scheme/9/scene01.png" alt="">' +
        '   <p>安防领域</p>' +
        '</div>' +
        '<div class="colss col-lg-6 col-sm-12">' +
        '   <img src="../../assets/scheme/9/scene02.png" alt="">' +
        '   <p>物业管理</p>' +
        '</div>' +
        '</div>';
        advInner = '<div class="colss col-lg-3 col-sm-12">' +
                   '  <img src="../../assets/scheme/9/advantage01.png" alt="">' +
                   '  <p>99.5%车辆检测召回率</p>'+
                   '</div>'+
                   '<div class="colss col-lg-3 col-sm-12">' +
                   '  <img src="../../assets/scheme/9/advantage02.png" alt="">' +
                   '  <p>精准多目标属性识别车辆信息</p>'+
                   '</div>'+
                   '<div class="colss col-lg-3 col-sm-12">' +
                   '  <img src="../../assets/scheme/9/advantage03.png" alt="">' +
                   '  <p>支持多倍速处理多种类型的视频文件</p>'+
                   '</div>'+
                   '<div class="colss col-lg-3 col-sm-12">' +
                   '  <img src="../../assets/scheme/9/advantage04.png" alt="">' +
                   '  <p>便捷的GPU资源扩充和管理机制</p>'+
                   '</div>'
                   '<div class="colss col-lg-3 col-sm-12">' +
                   '  <img src="../../assets/scheme/9/advantage04.png" alt="">' +
                   '  <p>强大的目标车辆交互效果强</p>'+
                   '</div>'
      break;
    case '9':
      system = '';
      advInner = '<div class="colss col-lg-3 col-sm-12">' +
                   '  <img src="../../assets/scheme/10/advantage01.png" alt="">' +
                   '  <p>先进的工作平台与人脸比对算法</p>'+
                   '</div>'+
                   '<div class="colss col-lg-3 col-sm-12">' +
                   '  <img src="../../assets/scheme/10/advantage02.png" alt="">' +
                   '  <p>视频来源及格式多元化</p>'+
                   '</div>'+
                   '<div class="colss col-lg-3 col-sm-12">' +
                   '  <img src="../../assets/scheme/10/advantage03.png" alt="">' +
                   '  <p>智能自学习</p>'+
                   '</div>'+
                   '<div class="colss col-lg-3 col-sm-12">' +
                   '  <img src="../../assets/scheme/10/advantage04.png" alt="">' +
                   '  <p>严格的安全体系</p>'+
                   '</div>'
                   '<div class="colss col-lg-3 col-sm-12">' +
                   '  <img src="../../assets/scheme/10/advantage04.png" alt="">' +
                   '  <p>多客户端应用</p>'+
                   '</div>'
      break;
    default:
      system = '<div class="title">应用场景</div>' +
        '<div class="content row">' +
        '<div class="colss col-lg-3 col-sm-12">' +
        '   <img src="../../assets/scheme/1/scene01.png" alt="">' +
        '   <p>环活动举办地交通道口</p>' +
        '</div>' +
        '<div class="colss col-lg-3 col-sm-12">' +
        '   <img src="../../assets/scheme/1/scene02.png" alt="">' +
        '   <p>会场周边生活区</p>' +
        '</div>' +
        '<div class="colss col-lg-3 col-sm-12">' +
        '   <img src="../../assets/scheme/1/scene03.png" alt="">' +
        '   <p>会场及驻地出入口</p>' +
        '</div>' +
        '<div class="colss col-lg-3 col-sm-12">' +
        '<img src="../../assets/scheme/1/scene04.png" alt="">' +
        '<p>会场核心区边界</p>' +
        '</div>' +
        '</div>';
      break;
  }
  // console.log(system);
  if(system == ''){
    // 控制产品优势模块的背景颜色
    $('#system').hide();
    $('#advantage').css({background: '#F4F5F6 '})
  }
  $('#system').html(system);
  $('#advantage .content').append(advInner);
})
