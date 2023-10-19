const http=require('http');

const server =http.createServer((req,res)=>{
    // console.log(req);
    // process.exit(); to unregister the event but we dont use this as server should be running

    console.log(req.url,req.method,req.headers)
    res.setHeader('Content-Type','text/html'); //if we remove this line its still working ,res.headers in network is not showing this header
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server</h1></body>')
    res.write('</html>');
    res.end()
})

server.listen(3030);