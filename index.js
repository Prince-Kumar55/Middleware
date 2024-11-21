const express = require('express');
const app = express();

function isOldEnough(age){
    if(age>=14){
        return true;
    }else{ 
        return false;
    }
}

function isOldEnoughMiddleware(req,res,next){
    const age = req.query.age
    if(age>=14){
        next();
    }else{ 
        res.json({
            msg : "you are not for age yet"
        })
    }
}
// we can write this function indivesualy and also top of the code.
// And order is also matter. you will not write app.use in the end of the code.
app.use(isOldEnoughMiddleware);

app.get("/ride1", function(req,res){
        res.json({
            message: "welcome to the first ride"
        })
    });

    app.get("/ride2", function(req,res){
        res.json({
            message: "welcome to the  ride2"
        })
    });
    app.get("/test",function(req,res){
        res.json({
            msg: "Now is good to Go"
        })
    })
app.listen(3000);