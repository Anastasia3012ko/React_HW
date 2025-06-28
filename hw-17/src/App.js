/** @jsxImportSource @emotion/react */
import React, { useState, useMemo } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Typography, Container } from '@mui/material';
import styled from '@emotion/styled';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#f5f5f5',
    },
  },
})

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    background: {
      default: '#121212',
    },
  },
})

const StyledButton = styled('button')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  border: 'none',
  borderRadius: '10px',
  padding: '10px 30px',
  fontSize: '18px',
  cursor: 'pointer',
  transition: 'all 0.1s ease',
  marginTop: '30px',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode])

  const toggleTheme = () => {
    setDarkMode((prev) => !prev)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ mt: 5, textAlign: 'left' }}>
        <Typography variant="h3" gutterBottom>
          {darkMode ? 'Dark Mode' : 'Light Mode'}
        </Typography>
        <StyledButton onClick={toggleTheme}>Toggle Theme</StyledButton>
      </Container>
    </ThemeProvider>
  )
}

export default App
