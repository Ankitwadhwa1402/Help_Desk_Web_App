import React, { useMemo } from 'react'
import typography from '../typography/typography';
import { ThemeProvider, createTheme } from '@mui/material';
export default function MyThemeProvider() {

  const themeOptions = useMemo(()=>({
      typography,
    }),[]);

    const theme = createTheme(themeOptions);

    theme.components = typography(theme);
  return (
    <ThemeProvider theme={theme}>

    </ThemeProvider>
  )
}
