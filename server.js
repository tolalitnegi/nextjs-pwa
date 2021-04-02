const next = require('next');
const http = require('http');
const url = require('url');
const path = require('path');

const port = process.env.port || 3008;
const dev = process.env.NODE_ENV !== 'production';
 
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare().then(()=>{
  // additional server for handling the service worker file request
  http.createServer((req, res)=>{
    const parsedUrl = url.parse(req.url);
    const {pathname} = parsedUrl;

    if(pathname == '/service-worker.js'){
      const filePath = path.join(__dirname, '.next', pathname); 
      app.serveStatic(req, res, filePath);

    } else {
      // else next handle it
      handle(req, res, parsedUrl);
    }
  }).listen(port, ()=>{
    console.log('........Server listening on '+port);
  });

});