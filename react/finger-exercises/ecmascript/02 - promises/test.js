import { delay, asyncDelay } from '.';

const TIME = 500;

describe('Promises', () => {
  it('delay works well', () => delay(TIME)
    .then(delayedTime => {
      expect(delayedTime).toBeGreaterThanOrEqual(TIME - 100);
      expect(delayedTime).toBeLessThanOrEqual(TIME + 100);
    }));

  it('delay will not wait if the time is too long', () => delay(TIME * TIME)
    .catch(e => expect(e).toEqual(Error('This time is too much !'))));

  it('asyncDelay also works well', async () => {
    const delayedTime = await asyncDelay(TIME);
    expect(delayedTime).toBeGreaterThanOrEqual(TIME - 100);
    expect(delayedTime).toBeLessThanOrEqual(TIME + 100);
  });
});
