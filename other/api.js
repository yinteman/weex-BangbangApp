/**
 * Created by ZXR on 2016/12/2.
 */


var stream
__weex_define__('@weex-temp/x', function(__weex_require__) {
    stream = __weex_require__('@weex-module/stream')
});

var modal
__weex_define__('@weex-temp/x', function(__weex_require__) {
    modal = __weex_require__('@weex-module/modal')
});

var storage
__weex_define__('@weex-temp/x', function(__weex_require__) {
    storage = __weex_require__('@weex-module/storage')
});
var event
__weex_define__('@weex-temp/x', function(__weex_require__) {
    event = __weex_require__('@weex-module/event')
});

//刷新页面
function refresh(){
    setTimeout(function(){
        location.reload();
    }, 1000);

}

//用户登录验证
var validate= function(username,password,cb){
    var body= 'username='+username+'&password='+password ;
    console.log(body);
    var url='http://119.29.241.75:8080/BangBang/UserAction!Login?'+body;
   return  stream.fetch({
        method: 'get',
        url:url ,
        type:'jsonp',
    }, function (response) {
       var data =response.data?response.data:response;
              if(data.success){
           modal.toast({'message':'success','duration':2});
           storage.setItem('username',username,function(e){});
       }else{
           //添加$modal
           modal.toast({'message':'用户名或密码错误','duration':2});
       }
       cb(data.success);
      });

}
//用户注册
var register = function(username,password,tel,cb) {
    var info = 'username=' + username + '&password=' + password + '&phoneNumber=' + tel;
    var url = 'http://119.29.241.75:8080/BangBang/UserAction!signUp?' + info;
      return stream.fetch({
        method: 'post',
        url: url,
        type: 'jsonp'
    }, function (response) {
        var data = response.data;

        if (data.success) {
            modal.toast({'message': 'success', 'duration': 2});
            storage.setItem('username', username, function (e) {
            });


        } else {
            modal.toast({'message': '用户名已存在', 'duration': 2});

        }
        cb(data.success);
    });
}

//获取用户信息
var getUserInfo = function(username,cb){
    var url ='http://119.29.241.75:8080/BangBang/UserAction!getUertInfo?username='+username;
    return stream.fetch({
        method: 'get',
        url: url,
        type:'jsonp'
    },function(response){
        if(response.ok){
            modal.toast({'message':'success','duration':2});
           storage.setItem('userId',response.data.userID,function(e){});
            cb(response.data);
        }else{
            modal.toast({'message':'获取失败','duration':2});

        }
    });

}

//更新用户信息
var updateUserInfo = function(username,tel,password){
    var info = 'username='+username+'&password='+password+'&phoneNumber='+tel;
    var url='http://119.29.241.75:8080/BangBang/UserAction!editUertInfo?'+info;
    return stream.fetch({
        method: 'get',
        url: url,
        type:'jsonp'
    },function(response){
        var data = response.data;
        if( data.success){
            modal.toast({'message':data.msg,'duration':2});
        }else {

            modal.toast({'message':'修改失败','duration':2});
        }
    });



}
//发布订单
var publicOrder = function(username,publicer,tel,company,order,pay,time,cb){

    var body ='username='+username+'&MissionRcecerName='+publicer;
     body +='&MissionRecerPhone='+tel+'&MissionCop='+company+'&MissionCA='+order;
    body +='&giveScore='+pay+'&BeTime='+time;
    var url ='http://119.29.241.75:8080/BangBang/UserAction!mission_I_bangbang?'+body;
        return stream.fetch({
        method: 'get',
        url: url,
        type:'jsonp'
    },function(response){
        var data = response.data;
         if( data.success){
            modal.toast({'message':data.msg,'duration':2});
            cb();
        }else {
            modal.toast({'message':'发布失败','duration':2});
        }
    });


}
//获取所有订单
var getGoodList = function(size,cb) {
    var url = 'http://119.29.241.75:8080/BangBang/UserAction!listMissions?offset=0&size='+size;
    url += '&relsuid=-1&recvuid=-1&hasExpired=1&MissionStatus=待接单';
    return stream.fetch({
        method: 'get',
        url: url,
        type: 'jsonp'
    }, function (response) {
        var data = response.data;
     if( data.success){
         cb(data.rows)
         }else {
         modal.toast({'message':'获取列表失败','duration':2});
         }
    });
}
//获取检索后的列表信息
var getGoodBySearch =function(size,body,cb){
    var url = 'http://119.29.241.75:8080/BangBang/UserAction!listMissions?offset=0&size=' + size;
    url += '&relsuid=-1&recvuid=-1&MissionStatus=待接单&hasExpired=1'+body;
    return stream.fetch({
        method: 'get',
        url: url,
        type: 'jsonp'
    }, function (response) {
        var data = response.data;
         if( data.success){
            cb(data.rows)
        }else {
            modal.toast({'message':'获取列表失败','duration':2});
        }
    });
}

//接单
var takeOrder = function(username , missId,cb){
     var url ='http://119.29.241.75:8080/BangBang/UserAction!mission_u_jiedan?';
     var body ='username='+username+'&MissionNo='+missId;
         url += body;
    return stream.fetch({
        method: 'get',
        url: url,
        type: 'jsonp'
    }, function (response) {
        var data = response.data;
         if( data.success){
             modal.toast({'message':'接单成功','duration':2});
           cb();
         }else {
         modal.toast({'message':'接单失败','duration':2});
         }
    });


}

//获取当前用户发布的订单和接收的订单
var userPublicOrTake = function(relsuid,recvuid,cb){

    var url = 'http://119.29.241.75:8080/BangBang/UserAction!listMissions?offset=0&size=20';
     var body = '&relsuid='+relsuid+'&recvuid='+recvuid+'&hasExpired=1';
         url += body;

    return stream.fetch({
        method: 'get',
        url: url,
        type: 'jsonp'
    }, function (response) {
        var data = response.data;
         if( data.success){
         cb(data.rows)
         }else {
         modal.toast({'message':'获取失败','duration':2});
         }
    });

}

var confirmOrder = function(missId,cb){
       var url ='http://119.29.241.75:8080/BangBang/UserAction!mission_u_confirm?MissionNo='+missId;
    return stream.fetch({
        method: 'get',
        url: url,
        type: 'jsonp'
    }, function (response) {
        var data = response.data;
        console.log(response)
        if( data.success){
            cb(data)
        }else {
            modal.toast({'message':'确认收货失败','duration':2});
        }
    });



}
//返回当前用户列表的搜索结果
var getPersonGoodBySearch = function(body,cb){
     var url='http://119.29.241.75:8080/BangBang/UserAction!listMissions?offset=0&size=15&relsuid=-1&recvuid=-1&hasExpired=1&';
       url += body;
    return stream.fetch({
        method: 'get',
        url: url,
        type: 'jsonp'
    }, function (response) {
        var data = response.data;
        if( data.success){
            cb(data.rows)
        }else {
            modal.toast({'message':'获取列表失败','duration':2});
        }
    });



}


exports.validate = validate ;
exports.register=register;
exports.getUserInfo = getUserInfo;
exports.updateUserInfo = updateUserInfo;
exports.publicOrder = publicOrder;
exports.getGoodList = getGoodList;
exports.takeOrder=takeOrder;
exports.userPublicOrTake =userPublicOrTake;
exports.getGoodBySearch= getGoodBySearch ;
exports.confirmOrder =confirmOrder;
exports.getPersonGoodBySearch = getPersonGoodBySearch;