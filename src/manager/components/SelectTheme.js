import React from 'react';
import { flattenTheme } from '@react-theming/flatten';

import * as styled from './SelectTheme.styled';
import Toolbar from '../UI/Toolbar';
import Caption from '../UI/Caption';

const materialPreview = ({ palette }) => ({
  main: [palette.primary.main, palette.primary.light, palette.primary.dark],
  text: [palette.text.secondary],
  accent: [
    palette.secondary.main,
    palette.secondary.light,
    palette.secondary.dark,
  ],
  background: [palette.text.primary],
});

const SelectTheme = ({ themeInfoList, themeInd, setCurrent }) => {
  if (!themeInfoList) return 'No themes info';
  const count = themeInfoList.length;
  const isMulti = count > 1;
  const isSingle = count <= 2;
  return (
    <styled.Container size={300}>
      <Toolbar>
        <Caption>{isMulti ? `${count} themes` : 'Single Theme'}</Caption>
      </Toolbar>
      <styled.ListHolder>
        <ul>
          {themeInfoList.map(({ name, theme }, ind) => {
            let colorList;
            if (
              theme.palette &&
              theme.palette.primary &&
              theme.palette.primary.main
            ) {
              colorList = materialPreview(theme);
            } else {
              const { flattenColors } = flattenTheme(theme);
              colorList = flattenColors.map(({ original }) => original);
            }
            return (
              <li key={name}>
                <styled.Theme
                  onClick={() => setCurrent(ind)}
                  current={ind === themeInd}
                  single={isSingle}
                >
                  <styled.AvatarHolder single={isSingle}>
                    <styled.ThemeAvatar>
                      <styled.Swatch theme={colorList} />
                    </styled.ThemeAvatar>
                  </styled.AvatarHolder>
                  <styled.Title single={isSingle}>{name}</styled.Title>
                </styled.Theme>
              </li>
            );
          })}
        </ul>
      </styled.ListHolder>
    </styled.Container>
  );
};

export default SelectTheme;
