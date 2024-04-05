const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');

app.set('view engine', 'ejs')

app.get('',(req,resp)=>{
    resp.sendFile(`${publicPath}/index.html`);
})

app.get('/profile',(req,resp)=>{
    const user = {
        name:"shreyans",
        email:"shreyans@test.com",
        city:"ajmer"
    }
    resp.render(`profile`,{user});
})

app.get('*',(_,resp)=>{
    resp.sendFile(`${publicPath}/nopage.html`)
});

app.listen(5000);