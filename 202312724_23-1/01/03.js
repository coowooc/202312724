const answer = `  require() 함수를 사용하는 방법과 import를 사용하는 방법이 있는데, require() 함수는 인자로 모듈 파일의 경로를 전달하며 해당 경로에 위치한 모듈 파일을 불러옵니다. import는 export를 사용하여 모듈을 내보내야 import로 받아올 수 있습니다. 
import 구문을 사용하기 위해서는 --experimental-modules 옵션을 사용해야 하며, 파일 확장자를 .mjs로 지정해야 합니다. 다음은 예시 코드 입니다.

`;

// hi.js
// function Hello(name) {
//     console.log(`Hello, ${name}`);
//   }
  
//   module.exports = { sayHello };
//  Hello() 함수를 만들고, module.exports 객체에 함수를 할당하여 Hello() 함수를 외부에서 사용할 수 있도록 합니다.


// index.js
// const hi = require('./hi');

// hi.Hello('chaeheejin');
//  require() 함수를 사용하여 hi.js 모듈을 불러오고 require() 함수의 인수로 모듈의 경로를 전달합니다. hi 객체에는 hi.js 모듈에서 사용가능하게 한 Hello() 함수가 할당됩니다. hi.Hello() 함수를 호출하여 "Hello, chaeheejin" 라는 메시지를 출력합니다.
console.log(answer);
