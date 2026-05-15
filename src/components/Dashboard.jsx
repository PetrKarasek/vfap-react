import React, { useState } from 'react';
import { 
  Container, Typography, Box, Tabs, Tab, Paper, 
  TextField, Button, Snackbar, Alert 
} from '@mui/material';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// Import tvojí tabulky
import UserTable from './UserTable'; 

// Pomocná komponenta pro obsah záložek
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const Dashboard = () => {
  // Stav pro přepínání záložek
  const [tabValue, setTabValue] = useState(0);
  
  // Stavy pro formulář ve druhé záložce
  const [message, setMessage] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    setSnackbarOpen(true);
    setMessage(''); 
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 5, minHeight: '80vh' }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Administrace
      </Typography>

      <Paper sx={{ width: '100%', mb: 2, boxShadow: 3, borderRadius: 2 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', px: 2, pt: 2 }}>
          <Tabs value={tabValue} onChange={handleTabChange} aria-label="dashboard tabs">
            <Tab label="Správa uživatelů" sx={{ fontWeight: 'bold' }} />
            <Tab label="Odeslat zprávu" sx={{ fontWeight: 'bold' }} />
          </Tabs>
        </Box>

        {/* TAB 1: Tabulka uživatelů */}
        <CustomTabPanel value={tabValue} index={0}>
          <Typography variant="h6" gutterBottom color="text.secondary">
            Přehled všech registrovaných uživatelů v systému
          </Typography>
          <UserTable /> 
        </CustomTabPanel>

        {/* TAB 2: Kontaktní formulář */}
        <CustomTabPanel value={tabValue} index={1}>
          <Container maxWidth="sm" sx={{ mt: 2 }}>
            <Typography variant="h5" gutterBottom>
              Rychlý kontakt podpory
            </Typography>

            <form onSubmit={handleSendMessage}>
              <TextField
                fullWidth
                label="Vaše zpráva"
                multiline
                rows={4}
                variant="outlined"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                sx={{ mb: 3 }}
              />
              
              {/* Datepicker */}
              <Box sx={{ mb: 3 }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker 
                    label="Kdy se problém vyskytl? (volitelné)"
                    sx={{ width: '100%' }}
                    disableFuture
                  />
                </LocalizationProvider>
              </Box>

              <Button type="submit" variant="contained" size="large">
                Odeslat hlášení
              </Button>
            </form>
          </Container>
        </CustomTabPanel>
      </Paper>

      <Snackbar 
        open={snackbarOpen} 
        autoHideDuration={4000} 
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
          Zpráva byla úspěšně odeslána administrátorům!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Dashboard;