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
  for (const str of set.values()) {
    if (str.startsWith(startString)) {
      const val = str.substring(startString.length);
      if (val && val !== str) {
        newString.push(val);
      }
    }
  }
  return newString.join('-');
};

export default cleanSet;
