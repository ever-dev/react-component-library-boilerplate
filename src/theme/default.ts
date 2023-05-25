import { ThemeOptions } from '@mui/material/styles';

const brand_light = '#7b8491';
const brand = '#0a1c35';
const blue_light = '#a4c6de';
const blue = '#3173b8';
const blue_dark = '#2b6097';
const teal = '#07dcb3';
const orange = '#f54f34';
const red = '#ff1c1c';
const silver = '#eff3f6';
const silver_dark = '#dde7f3';
const purple = '#6046e5';
const pink = '#e546b8';

export const defaultTheme: ThemeOptions = {
  palette: {
    primary: {
      light: blue_light,
      main: blue,
      dark: blue_dark,
    },
    secondary: {
      main: teal,
    },
    success: {
      main: teal,
    },
    warning: {
      main: orange,
    },
    error: {
      main: red,
    },
    gray: {
      main: silver,
    },
    brand: {
      light: brand_light,
      main: brand,
    },
    categories: {
      1: purple,
      2: blue,
      3: orange,
      4: teal,
      5: pink,
    },
  },
  typography: {
    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: silver,
          '&.Mui-disabled, &:hover, &:focus, &:active, &:focus-visible, &:focus-within': {
            backgroundColor: silver,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputAdornment-filled': {
            backgroundColor: silver,
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
            backgroundColor: silver,
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '& .MuiTouchRipple-child': {
            backgroundColor: blue,
          },
          '&.Mui-selected': {
            backgroundColor: silver_dark,
            '&:focus, &:hover': {
              backgroundColor: silver_dark,
            },
          },
        },
        button: {
          '&:focus': {
            backgroundColor: silver_dark,
          },
          '&:hover': {
            backgroundColor: silver,
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        colorPrimary: {
          '&.Mui-checked.Mui-disabled': {
            color: blue_light,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: blue,
          border: 'none',
          color: '#fff',
          padding: '6px 16px',
          '&:hover, &:focus': {
            backgroundColor: blue_dark,
            color: '#fff',
          },
          '&.Mui-disabled': {
            backgroundColor: blue_light,
            color: '#fff',
          },
          '&.MuiButton-containedSizeSmall': {
            padding: '4px 10px',
          },
        },
        root: {
          textTransform: 'capitalize',
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
