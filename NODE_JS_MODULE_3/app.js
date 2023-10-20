const http=require('http');
const routes=require('./routes.js');
console.log(routes.hardcode);
const server =http.createServer(routes.handle);

// const server =http.createServer((req,res)=>{
    // console.log(req);
    // process.exit(); to unregister the event but we dont use this as server should be running

    // console.log(req.url,req.method,req.headers)
    // if(req.url==='/')
    // {

    //     res.setHeader('Content-Type','text/html'); //if we remove this line its still working ,res.headers in network is not showing this header
    //     res.write('<html>');
    //     res.write('<head><title>My first page</title></head>');
    //     res.write('<body><form action="/message" method="POST"><input type="text" name="data"></input><button type="submit">Send</button></form></body>')
    //     res.write('</html>');
    //     return res.end()// we write return as to indicate end of this function 
    // }

    // if(req.url==='/message' && req.method === 'POST')
    // {
    //     const body=[];
    //     req.on('data',(chunk)=>{
    //         console.log(chunk)
    //         body.push(chunk);
    //     });//listening to event
    //     return req.on('end',()=>{// we are write return as we want this code to be executed and be ended the event without running at LINE 47
    //         const parsedBody=Buffer.concat(body).toString();
    //         console.log(parsedBody);
    //         const msg=parsedBody.split('=')[1];
    //         // fs.writeFileSync('message.txt',msg);//this command waits until the file is created
    //         // fs.writeFileSync('message.txt','dummy');
    //         fs.writeFile('message.txt',msg,err=>{
    //             res.statusCode=302;
    //             res.setHeader('Location','/');
    //             return res.end();
    //         });
    //         // res.statusCode=302;
    //         // res.setHeader('Location','/');
    //     //res.setHeader('Location','https://www.youtube.com/');//used to redirect
    //         // return res.end();
    //     })
    //     // // fs.writeFileSync('message.txt','dummy');
    //     // res.statusCode=302;
    //     // res.setHeader('Location','/');
    //     // //res.setHeader('Location','https://www.youtube.com/');//used to redirect
    //     // return res.end();
    // }
    // res.setHeader('Content-Type','text/html'); //if we remove this line its still working ,res.headers in network is not showing this header
    // res.write('<html>');
    // res.write('<head><title>My first page</title></head>');
    // res.write('<body><h1>Hello from my Node.js Server</h1></body>')
    // res.write('</html>');
    // res.end()
// })

server.listen(3030);