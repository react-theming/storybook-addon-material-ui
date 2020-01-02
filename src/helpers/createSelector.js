export const createSelector = (...args) => {
  const resultFn = args.pop();
  return store => {
    const selected = args.map(selector => selector(store));
    return resultFn(...selected);
  };
};
