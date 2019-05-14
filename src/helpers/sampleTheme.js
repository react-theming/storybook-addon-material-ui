export const createTheme = theme => ({
  name: 'Default Theme',
  mainColor: '#0000ff',
  textColor: 'hsl(0, 0%, 30%)',
  backgroundColor: 'white',
  ...theme,
})