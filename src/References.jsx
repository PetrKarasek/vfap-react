import React from 'react';
import { Box, Typography, Card, CardContent, Container } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import BusinessIcon from '@mui/icons-material/Business';
import './Home.css';

const References = () => {
  return (
    <Box>
      <Box className="hero-section">

        <Box className="floating-card-wrapper">
          <Card className="info-card">
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                Co o nás říkají
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Spolupracujeme se start-upy i zavedenými firmami. Náš administrační 
                systém jim pomohl zredukovat čas strávený byrokracií o desítky procent.
              </Typography>
              <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>
                Proč si vybrat nás?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Nenasazujeme jen hotová řešení. Nasloucháme potřebám našich klientů 
                a aplikaci přizpůsobujeme přesně na míru jejich byznysu.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 15, mb: 8 }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 4, justifyContent: 'center' }}>
          
          <Card sx={{ flex: 1, textAlign: 'center', p: 4, boxShadow: 2, borderRadius: 3 }}>
             <StarIcon sx={{ fontSize: 50, color: 'primary.main', mb: 2 }} />
             <Typography variant="h6" fontWeight="bold">TechCorp s.r.o.</Typography>
             <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>"Nejlepší investice do interních systémů za poslední roky. Přehledné a rychlé."</Typography>
          </Card>

          <Card sx={{ flex: 1, textAlign: 'center', p: 4, boxShadow: 2, borderRadius: 3 }}>
             <ThumbUpIcon sx={{ fontSize: 50, color: 'primary.main', mb: 2 }} />
             <Typography variant="h6" fontWeight="bold">Marketing Pro</Typography>
             <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>"Díky této aplikaci máme konečně perfektní přehled o našem rostoucím týmu."</Typography>
          </Card>

          <Card sx={{ flex: 1, textAlign: 'center', p: 4, boxShadow: 2, borderRadius: 3 }}>
             <BusinessIcon sx={{ fontSize: 50, color: 'primary.main', mb: 2 }} />
             <Typography variant="h6" fontWeight="bold">Logistika a.s.</Typography>
             <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>"Oceňujeme především stabilitu a skvělý přístup při zaškolování našich zaměstnanců."</Typography>
          </Card>

        </Box>
      </Container>
    </Box>
  );
};

export default References;