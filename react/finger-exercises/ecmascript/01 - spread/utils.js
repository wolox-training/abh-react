// This have a linter problem, it says that we should prefer
// export default
// Would you like to fix this issue ?

export default function isArray(aPossibleArray) {
  return aPossibleArray.constructor === Array;
}

// export default isArray;
