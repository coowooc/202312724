const https = require('https');
const fs = require('fs');

https.createServer({
  cert: fs.readFileSync('E:\202312724\202312724\cert\rootCA.crt'),
  key: fs.readFileSync('E:\202312724\202312724\cert\rootCA.key'),
  ca: [
    fs.readFileSync('E:\202312724\202312724\cert\server.crt'),
    fs.readFileSync('E:\202312724\202312724\cert\server.key'),
  ],
}, (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write('<h1>Hello Node!</h1>');
  res.end('<p>Hello Server!</p>');
})
  .listen(443, () => {
    console.log('443번 포트에서 서버 대기 중입니다!');
  });
