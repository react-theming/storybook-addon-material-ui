# UI Libraries with Theme Providers

## 1 Emotion

https://emotion.sh/docs/theming

```js
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

const theme = {
  colors: {
    primary: 'hotpink',
  },
};

render(
  <ThemeProvider theme={theme}>
    <div css={theme => ({ color: theme.colors.primary })}>some other text</div>
  </ThemeProvider>,
);
```

## 2 Styled Components

https://styled-components.com/docs/advanced#theming

```js
import styled, { ThemeProvider } from 'styled-components';

// Define our button, but with the use of props.theme this time
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    main: 'palevioletred',
  },
};

// Define what props.theme will look like
const theme = {
  main: 'mediumseagreen',
};

render(
  <div>
    <Button>Normal</Button>

    <ThemeProvider theme={theme}>
      <Button>Themed</Button>
    </ThemeProvider>
  </div>,
);
```

## 3 Material-UI

https://material-ui.com/customization/theming/

```js
<ThemeProvider theme={theme}>
  <CustomCheckbox />
</ThemeProvider>
```
