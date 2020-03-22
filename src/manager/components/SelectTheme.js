import React from 'react';

import * as styled from './SelectTheme.styled';
import Toolbar from '../UI/Toolbar';
import Caption from '../UI/Caption';

const SelectTheme = ({ themeInfoList, themeInd, setCurrent }) => {
  if (!themeInfoList) return 'No themes info';
  const count = themeInfoList.length;
  const isMulti = count > 1;
  return (
    <styled.Container size={300}>
      <Toolbar>
        <Caption>{isMulti ? `${count} themes` : null}</Caption>
      </Toolbar>
      <styled.ListHolder>
        <ul>
          {themeInfoList.map(({ name, theme }, ind) => (
            <li key={name}>
              <styled.Theme
                onClick={() => setCurrent(ind)}
                current={ind === themeInd}
              >
                <styled.ThemeAvatar>
                  <styled.Swatch theme={{ main: Object.values(theme) }} />
                </styled.ThemeAvatar>
                <styled.Title>{name}</styled.Title>
              </styled.Theme>
            </li>
          ))}
        </ul>
      </styled.ListHolder>
    </styled.Container>
  );
};

export default SelectTheme;
