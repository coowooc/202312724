const answer = ` const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// 이벤트 리스너 선언
myEmitter.on('event', function() {
  console.log('이벤트가 발생했습니다!');
});

console.log('첫 번째 이벤트 발생!');
myEmitter.emit('event');

console.log('두 번째 이벤트 발생!');
myEmitter.emit('event'); ";

코드를 실행하면 
첫 번째 이벤트 발생!
이벤트가 발생했습니다!
두 번째 이벤트 발생!
이벤트가 발생했습니다!"


`;
console.log(answer);
