const answer = `function getUserData(userId) {
    return new Promise((resolve, reject) => {
      // 비동기 처리
      getUserFromDatabase(userId, (err, userData) => {
        if (err) {
          reject(err); // 오류 발생 시 reject 호출
        } else {
          resolve(userData); // 데이터를 가져왔을 때 resolve 호출
        }
      });
    });
  }
  
  getUserData(123)
    .then(userData => {
      console.log(userData);
    })
    .catch(err => {
      console.error(err);
    });

변환 코드
async function getUserData(userId) {
    return new Promise((resolve, reject) => {
      // 비동기 처리
      getUserFromDatabase(userId, (err, userData) => {
        if (err) {
          reject(err); // 오류 발생 시 reject 호출
        } else {
          resolve(userData); // 데이터를 가져왔을 때 resolve 호출
        }
      });
    });
  }
  
  async function main() {
    try {
      const userData = await getUserData(123);
      console.log(userData);
    } catch (err) {
      console.error(err);
    }
  }
  
  main();


`;
console.log(answer);
