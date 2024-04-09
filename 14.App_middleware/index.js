const express = require('express');
const app = express();

const reqFilter = (req,resp,next)=>{
    if(!req.query.age){
        resp.send('Please provide age!!');
    }
    else if(req.query.age<18){
        resp.send('Age should be greater than 18')
    }
    else{
        next();
    }
}

// app.use(reqFilter);

app.get('',(req,resp)=>{
    resp.send('Welcome to home page');
})

app.get('/about',reqFilter,(req,resp)=>{
    resp.send('Welcome to about page');
})

app.get('/help',reqFilter,(req,resp)=>{
    resp.send('Welcome to help page');
})

app.listen(5000);