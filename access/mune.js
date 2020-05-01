let request=require('request');
let acces=require('../access.json');
let shuju=require('./shuju');

request({
    url:" https://api.weixin.qq.com/cgi-bin/menu/create?access_token="+acces.access_token,
    method:'post',
    body:shuju,
    json:true,

},function(err,res){
    console.log(res.log)
})

