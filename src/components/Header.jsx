import React from 'react';
import { Container } from '@mui/material';
import styled from 'styled-components';
import boatImage from '../assets/image.jpg'; // Zkontroluj, zda tato cesta sedí!

// Vytvoříme sémantickou komponentu
const HeroWrapper = styled.header`
  /* Sloučení ztmavení a obrázku do jedné vlastnosti */
  background: linear-gradient(
      rgba(0, 0, 0, 0.6), 
      rgba(0, 0, 0, 0.6)
    ),
    url(${boatImage}) no-repeat center bottom;
  background-size: cover;
  background-attachment: fixed; /* Parallax efekt */
  
  /* Větší výška pro hlavní banner */
  height: 400px; 
  
  /* Flexbox pro perfektní vycentrování obsahu horizontálně i vertikálně */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  letter-spacing: 1px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  font-weight: 300;
  opacity: 0.9;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
`;

const Header = () => {
  return (
    <HeroWrapper>
      <Container>
        <Title>Vítejte</Title>
        <Subtitle>Správa úkolů jednoduše a efektivně</Subtitle>
      </Container>
    </HeroWrapper>
  );
};

export default Header;