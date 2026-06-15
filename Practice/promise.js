function promiseMade(data) {
  return new Promise((resolve, reject) => {
    let netSpeed = Math.floor(Math.random() * 10) + 1;
    if (netSpeed < 5) {
      resolve();
    } else {
      reject();
    }
  });
}

promiseMade("hello!!")
    .then(() => {
    console.log("1111");
    })
    .then(() => {
        console.log("3333");
    })
    .then(() => {
        console.log("4444");
    })
    .catch(() => {
    console.log("22222");
    });
