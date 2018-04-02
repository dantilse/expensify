const promise = new Promise((resolve, reject) => {
  // request to server, fire database change, etc... long running async task
  // when done, call one of two functions depending on if something goes wrong
  setTimeout(() => {
    // resolve('This is a resolved message');
    reject('This is a rejected message');
  }, 1500);
});

console.log('before');

promise.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log('error: ', error);
});

console.log('after');
