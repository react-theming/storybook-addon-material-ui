const randomColor = () => {
  const c = 127 + Math.floor(Math.random() * 128);
  return `rgb(${c}, 60, 60)`;
};

export const createTheme = theme => ({
  main: randomColor(),
  textColor: 'hsl(0, 0%, 30%)',
  backgroundColor: 'white',
  ...theme,
});
