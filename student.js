var mysql=require('mysql');
var express=require('express');
studentrouter=express();

connection=mysql.createConnection({

    host:'localhost',
    user:'root',
    password:'manager',
    database:'student'

});
 var mydata=[];
connection.connect();

studentrouter.get('/',function(request,response){

    let query=`select * from student`;

    connection.query(query,function(err,res){
        if(err==null)
        {
            mydata=res;
            response.contentType('application/json');
            response.send(JSON.stringify(mydata));
        }
        else
        {
            response.send('something went wrong')
        }
    })
});

module.exports=studentrouter;
