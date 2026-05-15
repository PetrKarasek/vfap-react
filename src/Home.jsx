import React from 'react';
import { Box, Typography, Card, CardContent, Button, Container } from '@mui/material'; // Odebral jsem nepoužitý Grid
import GroupIcon from '@mui/icons-material/Group';
import { useNavigate } from 'react-router-dom';
import ApiIcon from '@mui/icons-material/Api';
import TableChartIcon from '@mui/icons-material/TableChart';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Box className="hero-section">
        <Typography className="subtitle-text">
          Správa úkolů jednoduše a efektivně
        </Typography>

        {/* Bílé plovoucí okno */}
        <Box className="floating-card-wrapper">
          <Card className="info-card">
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                O našem projektu
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Jsme tým nadšenců do moderních webových technologií. Tato aplikace vznikla 
                jako semestrální práce pro demonstraci síly Reactu a Material UI.
              </Typography>
              
              <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>
                Naše mise
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Chceme ukázat, že i školní projekt může vypadat profesionálně. 
                Zaměřujeme se na čistý kód, přístupnost a skvělý uživatelský zážitek (UX).
              </Typography>

              <Button 
                variant="contained" 
                startIcon={<GroupIcon />}
                sx={{ borderRadius: 2, px: 3 }}
                onClick={() => navigate('/login')}
              >
                Zjistit více
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* Spodní sekce s trojicí karet */}
      <Container maxWidth="lg" sx={{ mt: 15, mb: 8 }}>
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'row',
            gap: 4,
            justifyContent: 'center'
          }}
        >
          
          {/* KARTA 1 */}
          <Card sx={{ flex: 1, textAlign: 'center', p: 4, boxShadow: 2, borderRadius: 3 }}>
             <GroupIcon sx={{ fontSize: 50, color: 'primary.main', mb: 2 }} />
             <Typography variant="h6" fontWeight="bold">Uživatelská správa</Typography>
             <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
               Kompletní přehled o všech členech týmu na jednom místě. Přidávejte a spravujte role jednoduše.
             </Typography>
          </Card>

          {/* KARTA 2 */}
          <Card sx={{ flex: 1, textAlign: 'center', p: 4, boxShadow: 2, borderRadius: 3 }}>
             <ApiIcon sx={{ fontSize: 50, color: 'primary.main', mb: 2 }} />
             <Typography variant="h6" fontWeight="bold">API Integrace</Typography>
             <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
               Napojení na mockovací server Apiary pro simulaci reálného backendu a práci s daty.
             </Typography>
          </Card>

          {/* KARTA 3 */}
          <Card sx={{ flex: 1, textAlign: 'center', p: 4, boxShadow: 2, borderRadius: 3 }}>
             <TableChartIcon sx={{ fontSize: 50, color: 'primary.main', mb: 2 }} />
             <Typography variant="h6" fontWeight="bold">Interaktivní Tabulka</Typography>
             <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
               Pokročilé zobrazení dat s možností filtrování, řazení a klientského stránkování.
             </Typography>
          </Card>

        </Box>
      </Container>
    </Box>
  );
};

export default Home;