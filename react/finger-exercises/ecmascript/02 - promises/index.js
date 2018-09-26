// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(time) {
  const startedTime = Date.now();
  return new Promise((resolve, reject) => setInterval(() => {
    if (time >= 5000) {
      reject(Error('This time is too much !'));
    }
    const endTime = Date.now();
    const elapsedTime = endTime - startedTime;

    if (elapsedTime >= time) {
      resolve(elapsedTime);
    }
  }, 100));
}

export function asyncDelay(time) {
  return delay(time);
}
