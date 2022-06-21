const cleanSet = (set, startString) => {
  if (
    !set
    || !(set instanceof Set)
    || typeof startString !== 'string'
    || startString.length === 0
  ) {
    return '';
  }

  const newString = [];
  for (const val of set) {
    if (val && val.startsWith(startString)) {
      newString.push(val.slice(startString.length));
    }
  }
  return newString.join('-');
};

export default cleanSet;
