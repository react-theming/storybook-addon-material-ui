import { themeName } from '@react-theming/theme-name';

export const createSelector = (...args) => {
  const resultFn = args.pop();
  return store => {
    const selected = args.map(selector => selector(store));
    return resultFn(...selected, store);
  };
};

export const getCurrentInd = store => store.currentTheme;
export const getThemesList = store => store.themesList;

export const getTheme = createSelector(
  getCurrentInd,
  getThemesList,
  (ind, themes) => (themes ? themes[ind] : undefined),
);

export const getThemeInfoList = createSelector(getThemesList, (list = []) =>
  list.map((theme, ind) => ({
    name: themeName(theme, ind),
    theme,
  })),
);

export const getThemeInfo = createSelector(
  getCurrentInd,
  getThemeInfoList,
  (ind, themesInfo) => (themesInfo ? themesInfo[ind] : undefined),
);

export const getSelectedValue = createSelector(getTheme, (theme, store) => {
  const { selectedValue } = store;
  if (!selectedValue) return undefined;
  const { name, namespace, type } = selectedValue;
  const nestedObj = namespace.reduce((subObj, subKey) => subObj[subKey], theme);
  const value = nestedObj[name];
  return { name, namespace, value, type };
});
