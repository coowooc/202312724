const answer = `3000번 포트에서 HTTP 서버가 실행되고, http://localhost:3000 으로 접속하면 Hello World 텍스트를 볼 수 있습니다. 

const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
  fs.readFile('04.html', function (err, data) {
    if (err) {
      response.writeHead(404, {'Content-Type': 'text/plain'});
      response.end('Not found');
    } else {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end(data);
    }
  });
}).listen(3000);'
`;
console.log(answer);
