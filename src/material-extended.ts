import { CSSProperties } from 'react';

interface Categories {
  1: CSSProperties['color'];
  2: CSSProperties['color'];
  3: CSSProperties['color'];
  4: CSSProperties['color'];
  5: CSSProperties['color'];
}

declare module '@mui/material/styles' {
  interface Palette {
    brand: Palette['primary'];
    gray: Palette['primary'];
    categories: Categories;
  }
  interface PaletteOptions {
    brand: PaletteOptions['primary'];
    gray: PaletteOptions['primary'];
    categories: Categories;
  }
}

export {};
