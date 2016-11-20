const http = require('http');

const hostname = process.env.IP;
const port = process.env.PORT;


const server = http.createServer((req, res) => {
  console.log(req.url);
  router.handler(req);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

const router = {
    action: [],
    use: function(url, callback){
        this.action.push({url, callback});
    },
    handler: function(req){
        this.action.forEach((item)=>{
            console.log(item, req.url)
            if(req.url===item.url){
                item.callback();
            }
        });
    }
};

router.use('/1234', ()=>{
    console.log('123457');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});