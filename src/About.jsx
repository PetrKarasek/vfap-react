import React from 'react';
import { Box, Typography, Card, CardContent, Container } from '@mui/material';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import './Home.css'; // Importujeme stejné styly!

const About = () => {
  return (
    <Box>
      <Box className="hero-section">
        <Typography className="subtitle-text">
          Poznejte tým, který za tím stojí
        </Typography>

        <Box className="floating-card-wrapper">
          <Card className="info-card">
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                Kdo jsme?
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Jsme inovativní tým vývojářů s vášní pro čistý design a moderní technologie. 
                Náš cíl je zjednodušovat složité firemní procesy pomocí intuitivních aplikací.
              </Typography>
              <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>
                Naše vize
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Věříme, že každý software by měl být nejen funkční, ale i radost používat. 
                Proto dáváme velký důraz na User Experience (UX) a spolehlivost.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 15, mb: 8 }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 4, justifyContent: 'center' }}>
          
          <Card sx={{ flex: 1, textAlign: 'center', p: 4, boxShadow: 2, borderRadius: 3 }}>
             <EmojiObjectsIcon sx={{ fontSize: 50, color: 'primary.main', mb: 2 }} />
             <Typography variant="h6" fontWeight="bold">Inovace</Typography>
             <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>Neustále sledujeme nejnovější trendy v Reactu a přenášíme je do našich projektů.</Typography>
          </Card>

          <Card sx={{ flex: 1, textAlign: 'center', p: 4, boxShadow: 2, borderRadius: 3 }}>
             <SpeedIcon sx={{ fontSize: 50, color: 'primary.main', mb: 2 }} />
             <Typography variant="h6" fontWeight="bold">Rychlost</Typography>
             <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>Naše aplikace jsou optimalizované pro bleskové načítání a plynulý chod.</Typography>
          </Card>

          <Card sx={{ flex: 1, textAlign: 'center', p: 4, boxShadow: 2, borderRadius: 3 }}>
             <SecurityIcon sx={{ fontSize: 50, color: 'primary.main', mb: 2 }} />
             <Typography variant="h6" fontWeight="bold">Bezpečnost</Typography>
             <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>Vaše data jsou u nás v bezpečí díky moderním standardům zabezpečení.</Typography>
          </Card>

        </Box>
      </Container>
    </Box>
  );
};

export default About;