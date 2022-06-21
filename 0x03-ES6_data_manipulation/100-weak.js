export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let used = weakMap.get(endpoint) || 0;
  weakMap.set(endpoint, used += 1);
  if (used >= 5) {
    throw new Error('Endpoint load is high');
  }

  return used;
}
