import isArray from './utils';

export function min(...args) {
  if (!args.length) {
    return undefined;
  }
  return isArray(args[0]) ? Math.min(...args[0]) : Math.min(...args);
}

export function copy(...args) {
  return isArray(...args) ? [...args[0]] : { ...args[0] };
}

export function reverseMerge(...args) {
  return [...args[1], ...args[0]];
}

export function filterAttribs(obj) {
  const { a, b, ...res } = obj;
  return res;
}
