// let IncrementNum = document.getElementById("incremetnal-info-num");

let i = 1;
const intervalId = setInterval(() => {
  console.log(i);
  if (i === 10) {
    clearInterval(intervalId);
  }
  i++;
}, 100);
