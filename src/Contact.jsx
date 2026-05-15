import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Container, Grid, TextField, Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import './Home.css';

// Importy pro Datepicker
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// Import tvého Snackbaru (cesta podle tvého screenshotu)
import NotificationSnackbar from './components/NotificationSnackbar';

const Contact = () => {
  // State pro Snackbar
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  // State pro Datepicker
  const [selectedDate, setSelectedDate] = useState(null);

  // Funkce po kliknutí na odeslat
  const handleSubmit = (e) => {
    e.preventDefault();
    // Zde by normálně proběhlo odeslání dat na API
    setSnackbarOpen(true); //Zobrazí snackbar
  };

  return (
    <Box>
      <Box className="hero-section">
        <Typography className="subtitle-text">Rádi s vámi probereme detaily</Typography>
        <Box className="floating-card-wrapper">
          <Card className="info-card">
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>Kontaktujte nás</Typography>
              <Typography variant="body1" color="text.secondary">
                Máte dotazy ohledně naší aplikace? Neváhejte nám napsat přes formulář níže.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>

      <Container maxWidth="md" sx={{ mt: 15, mb: 8 }}>
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mb: 4 }}>Naše kontakty</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 4, flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {/* Zkráceno pro přehlednost - zde jsou tvé ikony z předchozího kódu */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ bgcolor: '#e3f2fd', p: 1.5, borderRadius: 2, display: 'flex', mr: 2, color: 'primary.main' }}><EmailIcon /></Box>
              <Box><Typography variant="body2" color="text.secondary">Email</Typography><Typography variant="body1" fontWeight="bold">info@react-vfap.cz</Typography></Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ bgcolor: '#e3f2fd', p: 1.5, borderRadius: 2, display: 'flex', mr: 2, color: 'primary.main' }}><PhoneIcon /></Box>
              <Box><Typography variant="body2" color="text.secondary">Telefon</Typography><Typography variant="body1" fontWeight="bold">+420 123 456 789</Typography></Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ bgcolor: '#e3f2fd', p: 1.5, borderRadius: 2, display: 'flex', mr: 2, color: 'primary.main' }}><LocationOnIcon /></Box>
              <Box><Typography variant="body2" color="text.secondary">Adresa</Typography><Typography variant="body1" fontWeight="bold">Technická 2, Praha 6</Typography></Box>
            </Box>
          </Box>
        </Box>

        <Card sx={{ p: 4, boxShadow: 2, borderRadius: 3 }}>
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 4 }}>Napište nám zprávu</Typography>
          
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}><TextField fullWidth label="Jméno" variant="outlined" required /></Grid>
              <Grid item xs={12} sm={6}><TextField fullWidth label="Email" type="email" variant="outlined" required /></Grid>
              
              {/* ZDE JE PŘIDANÝ DATEPICKER */}
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker 
                    label="Preferované datum schůzky (volitelné)"
                    value={selectedDate}
                    onChange={(newValue) => setSelectedDate(newValue)}
                    sx={{ width: '100%' }}
                    disableFuture
                  />
                </LocalizationProvider>
              </Grid>

              <Grid item xs={12}><TextField fullWidth label="Zpráva" multiline rows={5} variant="outlined" required /></Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" size="large" endIcon={<SendIcon />} sx={{ py: 1.5, px: 4, borderRadius: 2, fontWeight: 'bold' }}>
                  Odeslat zprávu
                </Button>
              </Grid>
            </Grid>
          </form>
        </Card>
      </Container>

      {/* ZDE JE NAPOJENÝ TVŮJ SNACKBAR */}
      <NotificationSnackbar 
        open={snackbarOpen} 
        message="Zpráva byla úspěšně odeslána!" 
        severity="success" 
        onClose={() => setSnackbarOpen(false)} 
      />
    </Box>
  );
};

export default Contact;