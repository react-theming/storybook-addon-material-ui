import React from 'react';

import * as styled from './SelectTheme.styled';

const SelectTheme = ({ themeInfoList, setCurrent }) => {
  if (!themeInfoList) return 'No themes info';
  return (
    <styled.Container size={300}>
      <ul>
        {themeInfoList.map(({ name, theme }, ind) => (
          <li key={name}>
            <styled.Theme onClick={() => setCurrent(ind)}>
              <styled.ThemeAvatar>
                <styled.Swatch theme={{ main: Object.values(theme) }} />
              </styled.ThemeAvatar>
              <styled.Title>{name}</styled.Title>
            </styled.Theme>
          </li>
        ))}
      </ul>
    </styled.Container>
  );
};

export default SelectTheme;
