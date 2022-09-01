import React from 'react'
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from '@contexts/AuthContext'
import Routes from '@app/routes'
import GlobalStyles from '@styles/global'
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import defaultTheme, { MUIDefaultTheme } from '@styles/themes/default'
import CssBaseline from '@mui/material/CssBaseline'

import './App.css'
function App() {
  return (
    <MUIThemeProvider theme={MUIDefaultTheme}>
      <ThemeProvider theme={defaultTheme}>
        <React.StrictMode>
          <CssBaseline />
          <GlobalStyles />
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </React.StrictMode>
      </ThemeProvider>
    </MUIThemeProvider>
  )
}

export default App
