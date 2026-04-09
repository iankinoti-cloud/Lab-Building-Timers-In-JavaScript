
function countdownTimer(startTime, interval) {
  let remainingTime = startTime;

  const timerId = setInterval(() => {
    if (remainingTime > 0) {
      console.log(remainingTime);
      remainingTime -= 1;
      return;
    }

    clearInterval(timerId);
  }, interval);

  return timerId;
}

module.exports = { countdownTimer };
