/**
 * Created by ZXR on 2016/12/1.暴露中间 件
 */
var os = require('os');
var url=require('url');
var modal
__weex_define__('@weex-temp/x', function(__weex_require__) {
    modal = __weex_require__('@weex-module/modal')
});
var event
__weex_define__('@weex-temp/x', function(__weex_require__) {
    event = __weex_require__('@weex-module/event')
});

var animation
__weex_define__('@weex-temp/x', function(__weex_require__) {
    animation = __weex_require__('@weex-module/animation')
});
var storage
__weex_define__('@weex-temp/x', function(__weex_require__) {
    storage = __weex_require__('@weex-module/storage')
});
function redirectionBy(msg,moduleUrl){
    modal.confirm({
        message: msg,
        okTitle: "ok",
        cancelTitle: 'cancel'
    },function(result){
        if(result == 'ok'){
           event.openURL(moduleUrl,
                function(err){
                    console.log(err);
                });
        }
    });


}
/*获取ip*/
exports.getIPAddress = function(){
    var ips = os.networkInterfaces();
    var address ;
    for(var item in ips){
        for(var data in ips[item]){
            var ip = ips[item][data];
            console.log(ip.address);
            if(ip.address.indexOf('192')==0){
                address = ip.address;
                return address;
            }

        }
    }
}

exports.getBaseUrl = function(bundleUrl){

    _bundleUrl = new String(bundleUrl);
    console.log('hit', bundleUrl);
    var nativeBase;
    var isAndroidAssets = _bundleUrl.indexOf('file://assets/') >= 0;

    var isiOSAssets = _bundleUrl.indexOf('file:///') >= 0 && _bundleUrl.indexOf('WeexDemo.app') > 0;
    if (isAndroidAssets) {
        nativeBase = 'file://assets/';
    }
    else if (isiOSAssets) {
        // file:///var/mobile/Containers/Bundle/Application/{id}/WeexDemo.app/
        // file:///Users/{user}/Library/Developer/CoreSimulator/Devices/{id}/data/Containers/Bundle/Application/{id}/WeexDemo.app/
        nativeBase = _bundleUrl.substring(0, _bundleUrl.lastIndexOf('/') + 1);
    }
    else {
        var host = 'localhost:9091';
        var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
        if (matches && matches.length >= 2) {
            host = matches[1];
        }
        nativeBase = 'http://' + host + '/'  + '/dist/';
    }
    var h5Base = './index.html?page=./' +  '/dist/';
// in Native
    var base = nativeBase;
    if (typeof window === 'object') {
        // in Browser or WebView
        base = h5Base;
    }

   return base;



}
exports.getBaseImgUrl= function (bundleUrl) {
    _bundleUrl = new String(bundleUrl);
    console.log('hit', bundleUrl);
    var nativeBase;
    var isAndroidAssets = _bundleUrl.indexOf('file://assets/') >= 0;

    var isiOSAssets = _bundleUrl.indexOf('file:///') >= 0 && _bundleUrl.indexOf('WeexDemo.app') > 0;
    if (isAndroidAssets) {
        nativeBase = 'file://assets/';
    }
    else if (isiOSAssets) {
        // file:///var/mobile/Containers/Bundle/Application/{id}/WeexDemo.app/
        // file:///Users/{user}/Library/Developer/CoreSimulator/Devices/{id}/data/Containers/Bundle/Application/{id}/WeexDemo.app/
        nativeBase = _bundleUrl.substring(0, _bundleUrl.lastIndexOf('/') + 1);
    }
    else {
        var host = 'localhost:9091';
        var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
        if (matches && matches.length >= 2) {
            host = matches[1];
        }
        nativeBase = 'http://' + host + '/'  + 'img/';
    }
    var h5Base = './index.html?page=./' +  'img/';
// in Native
    var base = nativeBase;
    if (typeof window === 'object') {
        // in Browser or WebView
        base = h5Base;
    }

    return base;

}

exports.loginOut = function(baseUrl){
    var msg = '退出？';
    var moduleUrl = baseUrl+'login.js';
    storage.removeItem('username',function(){
        redirectionBy(msg,moduleUrl)
    })


}
exports.backToList = function(baseUrl){
    var msg = '返回列表？';
    var moduleUrl = baseUrl+'good.js';
    redirectionBy(msg,moduleUrl);

}
exports.backToHome = function(baseUrl){
    var msg = '返回主页？';
    var moduleUrl = baseUrl+'home.js';
    redirectionBy(msg,moduleUrl);
}

exports.goToSearch= function(baseUrl){
    var msg = '进入高级搜索？';
    var moduleUrl = baseUrl+'search.js';
    redirectionBy(msg,moduleUrl);

}
exports.goToRegister= function(baseUrl){
    var msg = '注册？';
    var moduleUrl = baseUrl+'signup.js';
    redirectionBy(msg,moduleUrl);
}

exports.moveTo = function(el,y) {

    return  animation.transition(el, {
        styles: {
            color: '#FF0000',
            // height:height,
            transform: 'translate(0,' + y + ')',
            transformOrigin: 'center center',

        },
        duration: 100, //ms
        timingFunction: 'ease-in-out',
        delay: 0 //ms
    }, function () {
        nativeLog('animation finished.')
    })


}
exports.makeGoodList = function(data){
        var res={
        goodLists:[],
        moreGoods:[]

    };
    data.forEach(function(item,index){
        var good={
            id : index,
            scopeValue : index ,
            PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
            PersonName:item.MissionRecerName,
            deadLine:item.MissionDeadline,
            tel:item.MissionRecerPhone,
            company:item.MissionCop,
            order:item.MissionCA,
            missId:item.MissionNo,
            pay:item.giveScore,
             status: item.MissionStatus

        };
        if(res.goodLists.length >14){

            res.moreGoods.push(good);

        }else{
            res.goodLists.push(good);}
    });

  return res;

}