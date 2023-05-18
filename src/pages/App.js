import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../componenets/Header';
import FeatureSection from '../componenets/FeatureSection';
import Footer from '../componenets/Footer';

function App() {
  return (
    <Container>
      <Header />
      <FeatureSection />
      <Footer />
    </Container>
  );
}

export default App;
