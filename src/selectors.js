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
  (ind, themes) => themes[ind],
);

export const getThemeInfoList = createSelector(getThemesList, list =>
  list.map((theme, ind) => ({
    name: themeName(theme, ind + 1),
    theme,
  })),
);

export const getSelectedValue = createSelector(getTheme, (theme, store) => {
  const { name, namespace, type } = store.selectedValue;
  const nestedObj = namespace.reduce((subObj, subKey) => subObj[subKey], theme);
  const value = nestedObj[name];
  return { name, namespace, value, type };
});
