var express=require("express");
var app=express();
studentrouter=require('./student');
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());
app.use('/student',studentrouter);

app.listen(5000,function(){

    console.log("server restarted");
});
