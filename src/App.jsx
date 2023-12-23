// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Container from '@mui/material/Container';

const Home = () => (
  <Container maxWidth="md">
    <Header />
    <About />
    <Projects />
    <Contact />
    {/* Add more components as needed */}
  </Container>
);

const AboutPage = () => (
  <Container maxWidth="md">
    <Header />
    <About />
    {/* Additional content for the About page */}
  </Container>
);

const ProjectsPage = () => (
  <Container maxWidth="md">
    <Header />
    <Projects />
    {/* Additional content for the Projects page */}
  </Container>
);

const ContactPage = () => (
  <Container maxWidth="md">
    <Header />
    <Contact />
    {/* Additional content for the Contact page */}
  </Container>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
