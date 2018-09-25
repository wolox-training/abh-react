import isArray from './utils';

export function min(...args) {
  if (args.length === 0) {
    return undefined;
  }
  if (isArray(...args)) {
    return Math.min(...args[0]);
  }
  return Math.min(...args);
}

export function copy() {

}
