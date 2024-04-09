const express = require('express');
const path = require('path');

const app = express();
const publicpath = path.join(__dirname,'public');

app.get('',(req,resp)=>{
    resp.sendFile(`${publicpath}/index.html`);
})

app.set("view engine","ejs");
app.get('/profile',(req,resp)=>{
    let user = {
        name:"anshu",
        city:"ajmer",
        skills:["java","node","html"]
    }
    resp.render(`profile`,{user})
});

app.listen(5000);