import { min, copy, reverseMerge, filterAttribs } from '.';

describe('Spread operator', () => {
  it('min returns the param if is the only argument', () => {
    expect(min(1)).toBe(1);
    expect(min(2)).toBe(2);
  });
  it('min can return the minimum based on a list', () => {
    expect(min([1, 2])).toBe(1);
    expect(min([2, 1])).toBe(1);
  });
  it('min can return the minimum based on many parameters', () => {
    expect(min(1, 2, 3, 4, 5, 0)).toBe(0);
    expect(min(1, 2, 3, 4, -1, 0)).toBe(-1);
  });
  it('min returns undefined on no args', () => {
    expect(min()).toBe(undefined);
  });
  it('copy can copy objects', () => {
    const example = { a: 1, b: 2 };
    const copiedExample = copy(example);

    expect(example).toEqual(copiedExample);

    example.c = 3;

    expect(example).toEqual({ a: 1, b: 2, c: 3 });
    expect(copiedExample).toEqual({ a: 1, b: 2 });
  });
  it('copy can copy arrays', () => {
    const example = [];
    const copiedExample = copy(example);

    expect(example).toEqual(copiedExample);

    example.push(1);

    expect(example).toEqual([1]);
    expect(copiedExample).toEqual([]);
  });
  it('reverseMerge returns a new array based on two, but it switches the order of them', () => {
    expect(reverseMerge([1], [2])).toEqual([2, 1]);
    expect(reverseMerge([1, 1, 1], [3, 2])).toEqual([3, 2, 1, 1, 1]);
    expect(reverseMerge([1, 2], [3, 4, 5])).toEqual([3, 4, 5, 1, 2]);
  });
  it('reverseMerge does not mutate the arguments', () => {
    const example1 = [1, 2];
    const example2 = [3, 4];

    reverseMerge(example1, example2);

    expect(example1).toEqual([1, 2]);
    expect(example2).toEqual([3, 4]);
  });
  it('filterAttribs filters \'a\' and \'b\' by default', () => {
    expect(filterAttribs({ a: 1, b: 2, c: 3 })).toEqual({ c: 3 });
    expect(filterAttribs({ b: 1, a: 2, c: 3 })).toEqual({ c: 3 });
    expect(filterAttribs({
      b: 1, d: 2, c: 3, e: 1
    })).toEqual({ c: 3, d: 2, e: 1 });
  });
  it('filterAttribs does not mutate the argument', () => {
    const example = { a: 1, b: 2, c: 3 };

    filterAttribs(example);

    expect(example).toEqual({ a: 1, b: 2, c: 3 });
  });
});
