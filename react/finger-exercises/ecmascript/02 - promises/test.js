import { delay, asyncDelay } from '.';

const TIME = 500;

describe('Promises', () => {
  xit('delay works well', () => delay(TIME)
    .then(delayedTime => {
      expect(delayedTime).toBeGreaterThanOrEqual(TIME - 100);
      expect(delayedTime).toBeLessThanOrEqual(TIME + 100);
    }));

  xit('delay will not wait if the time is too long', () => delay(TIME * TIME)
    .catch(e => expect(e).toEqual(Error('This time is too much !'))));

  xit('asyncDelay also works well', async () => {
    const delayedTime = await asyncDelay(TIME);
    expect(delayedTime).toBeGreaterThanOrEqual(TIME - 100);
    expect(delayedTime).toBeLessThanOrEqual(TIME + 100);
  });
});
