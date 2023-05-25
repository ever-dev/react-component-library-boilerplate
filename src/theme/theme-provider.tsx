import React, { Children, useMemo } from 'react';

import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import type { ThemeProviderProps } from '@mui/material/styles/ThemeProvider';

import { themes } from './themes';

export type { Theme } from '@mui/material/styles';
export { StyledEngineProvider } from '@mui/material/styles';

interface Props extends Omit<ThemeProviderProps, 'theme'> {
  platform?: string;
}

export const ThemeProvider = ({ platform, ...props }: Props) => {
  const themeGenerator = platform === 'wn' ? themes.sw : themes.ha;
  const theme = useMemo(() => createTheme(themeGenerator), [themeGenerator]);

  return (
    <MuiThemeProvider theme={theme} {...props}>
      {Children.only(props.children)}
    </MuiThemeProvider>
  );
};
