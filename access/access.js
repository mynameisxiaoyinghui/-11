let https =require('https');
let fs=require('fs');
let url='https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx3f11baf063fd866b&secret=c0c5e5206b23671b4630771af330f130';

https.get(url,function(res){
    let str='';
    res.on('data',function(chunk){
        str+=chunk;
        console.log(str);
    });
    res.on('end',function(){
        let json=JSON.parse(str);//将字符串转成对象。方便存取
        fs.writeFile('../access.json',JSON.stringify(json),function(){//用一个的单独单位文件将json数据存起来;方便调用

        })
    })
})
