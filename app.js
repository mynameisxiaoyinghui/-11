let exper=require('express');
let app=exper();
let reuter=require('./router/index');

app.use('/',reuter)

app.listen(80)