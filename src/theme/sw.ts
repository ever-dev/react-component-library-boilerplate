import { ThemeOptions } from '@mui/material/styles';

const primary_red = '#d5152e';
const primary_yellow = '#ffbf27';
const primary_blue = '#304cb2';
const primary_blue_light = '#3750a2';
const primary_blue_dark = '#254497';

const secondary_orange = '#ff792e';
const secondary_green = '#008020';
const secondary_blue = '#111b40';

const neutral_gray_1 = '#f5f5f5';
const neutral_gray_2 = '#e6e7e8';
const neutral_gray_3 = '#636363';

const teal = '#07dcb3';
const purple = '#6046e5';
const pink = '#e546b8';

export const swTheme: ThemeOptions = {
  palette: {
    primary: {
      light: primary_blue_light,
      main: primary_blue,
      dark: primary_blue_dark,
    },
    secondary: {
      main: primary_yellow,
    },
    success: {
      main: secondary_green,
    },
    warning: {
      main: primary_yellow,
    },
    error: {
      main: primary_red,
    },
    gray: {
      main: neutral_gray_1,
    },
    brand: {
      light: primary_blue_light,
      main: primary_blue_dark,
    },
    categories: {
      1: purple,
      2: primary_blue,
      3: secondary_orange,
      4: teal,
      5: pink,
    },
  },
  typography: {
    fontFamily: '"Arial", sans-serif',
  },
  components: {
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: neutral_gray_1,
          '&.Mui-disabled, &:hover, &:focus, &:active, &:focus-visible, &:focus-within': {
            backgroundColor: neutral_gray_1,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputAdornment-filled': {
            backgroundColor: neutral_gray_1,
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          '&:focus': {
            backgroundColor: neutral_gray_1,
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '& .MuiTouchRipple-child': {
            backgroundColor: primary_blue,
          },
          '&.Mui-selected': {
            backgroundColor: neutral_gray_2,
            '&:focus, &:hover': {
              backgroundColor: neutral_gray_2,
            },
          },
        },
        button: {
          '&:focus': {
            backgroundColor: neutral_gray_2,
          },
          '&:hover': {
            backgroundColor: neutral_gray_1,
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        colorPrimary: {
          '&.Mui-checked.Mui-disabled': {
            color: neutral_gray_2,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: primary_yellow,
          border: '1px solid',
          borderColor: primary_yellow,
          color: secondary_blue,
          padding: '5px 16px',
          '&:hover, &:focus': {
            backgroundColor: primary_yellow,
            color: secondary_blue,
            borderColor: secondary_blue,
          },
          '&.Mui-disabled': {
            backgroundColor: neutral_gray_2,
            color: neutral_gray_3,
            borderColor: neutral_gray_2,
          },
          '&.MuiButton-containedSizeSmall': {
            padding: '3px 10px',
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        marginDense: {
          marginTop: '14px',
          marginBottom: '6px',
        },
      },
    },
  },
};
