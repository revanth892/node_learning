const http=require('http');
const fs =require('fs');
const server =http.createServer((req,res)=>{
    // console.log(req);
    // process.exit(); to unregister the event but we dont use this as server should be running

    console.log(req.url,req.method,req.headers)
    if(req.url==='/')
    {

        res.setHeader('Content-Type','text/html'); //if we remove this line its still working ,res.headers in network is not showing this header
        res.write('<html>');
        res.write('<head><title>My first page</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="data"></input><button type="submit">Send</button></form></body>')
        res.write('</html>');
        return res.end()// we write return as to indicate end of this function 
    }

    if(req.url==='/message' && req.method === 'POST')
    {
        fs.writeFileSync('message.txt','Dummy');
        res.statusCode=302;
        res.setHeader('Location','/');
        //res.setHeader('Location','https://www.youtube.com/');//used to redirect
        return res.end();
    }
    res.setHeader('Content-Type','text/html'); //if we remove this line its still working ,res.headers in network is not showing this header
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server</h1></body>')
    res.write('</html>');
    res.end()
})

server.listen(3030);