// Global Object

console.log(global);

setTimeout(() => {
    console.log("in the Timeout");
    clearInterval(interval);
  }, 3000);

const interval=setInterval(() => {
  console.log("in the interval");
}, 1000);



console.log(__dirname);
console.log(__filename);

