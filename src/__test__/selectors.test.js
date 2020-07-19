import { getTheme, getThemeInfoList } from '../selectors';
import { createTheme } from '../helpers/sampleTheme';

const firstTheme = createTheme({
  mainColor: 'red',
  name: 'red-theme',
});
const secondTheme = createTheme({
  mainColor: 'green',
  name: 'green-theme',
});
const thirdTheme = createTheme({
  mainColor: 'blue',
  name: 'blue-theme',
});

const store = {
  themesList: [firstTheme, secondTheme, thirdTheme],
  currentTheme: 1,
};

it('should select theme', () => {
  expect(getTheme(store)).toEqual(secondTheme);
});

it('should select theme-names', () => {
  const names = ['red-theme', 'green-theme', 'blue-theme'];
  expect(getThemeInfoList(store).map(({ name }) => name)).toEqual(names);
});
