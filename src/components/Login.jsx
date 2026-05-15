import React, { useState } from 'react';
import { Container, Box, Card, CardContent, Typography, TextField, Button, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Zabrání znovunačtení stránky

    // Mockovaný (falešný) login
    if (email === 'admin@test.cz' && password === 'heslo') {
      
      // 1. Vygenerování falešného JWT token
      const mockJwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.moje_falesna_payload.podpis";
      
      // 2. Uložení do LocalStorage
      localStorage.setItem('token', mockJwtToken);
      
      // 3. Přesměrování uživatele na Dashboard
      navigate('/dashboard');
      
    } else {
      setError(true);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 15, mb: 10 }}>
      <Card sx={{ p: 2, boxShadow: 3, borderRadius: 3 }}>
        <CardContent>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Přihlášení
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Zadejte admin@test.cz a heslo
            </Typography>
          </Box>

          {/* Vyskakovací alert při špatném zadání */}
          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              Špatný email nebo heslo!
            </Alert>
          )}

          <form onSubmit={handleLogin}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              fullWidth
              label="Heslo"
              type="password"
              variant="outlined"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{ mt: 3, py: 1.5, fontWeight: 'bold' }}
            >
              Přihlásit se
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Login;