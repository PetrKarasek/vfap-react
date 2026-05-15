import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';

export const NavigationBar = () => {
  const navigate = useNavigate();
  // Zkontrolujeme, zda je uživatel přihlášen
  const isAuthenticated = authService.isAuthenticated ? authService.isAuthenticated() : false;

  const handleLogout = () => {
    if (authService.logout) authService.logout();
    navigate('/login');
  };

  return (
    <AppBar position="static" sx={{ bgcolor: '#212529', boxShadow: 0 }}>
      <Toolbar maxWidth="lg" sx={{ width: '100%', m: 'auto' }}>
        {/* LOGO vlevo */}
        <Typography 
          variant="h6" 
          component={Link} 
          to="/" 
          sx={{ flexGrow: 1, textDecoration: 'none', color: 'white', fontWeight: 'bold', letterSpacing: 1 }}
        >
          VFAP
        </Typography>

        {/* ODKAZY vpravo */}
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Button color="inherit" component={Link} to="/">Hlavní strana</Button>
          <Button color="inherit" component={Link} to="/about">O nás</Button>
          <Button color="inherit" component={Link} to="/references">Reference</Button>
          <Button color="inherit" component={Link} to="/contact">Kontakt</Button>
          
          {isAuthenticated ? (
            <>
              <Button color="inherit" component={Link} to="/dashboard" sx={{ ml: 2, border: '1px solid white' }}>
                Dashboard
              </Button>
              <Button color="error" variant="contained" onClick={handleLogout} sx={{ ml: 1 }}>
                Logout
              </Button>
            </>
          ) : (
            <Button color="primary" variant="contained" component={Link} to="/login" sx={{ ml: 2 }}>
              Login
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;