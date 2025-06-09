import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Usuarios from './pages/Usuarios';
import Dados from './pages/Dados';
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Container,
} from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div">
              Sistema de Usuários
            </Typography>
          </Toolbar>
        </AppBar>
        <Container style={{ paddingTop: '2rem' }}>
          <Routes>
            <Route path="/" element={<Navigate to="/usuarios" />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/dados/:id" element={<Dados />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
