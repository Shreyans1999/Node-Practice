const http= require('http');

http.createServer((req,resp)=>{
resp.write(`<h1>Hello this is shreyans saklecha!!!!</h1>`);
resp.end();
}).listen(5000);