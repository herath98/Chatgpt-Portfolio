// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Container from '@mui/material/Container';
import Skills from './components/Skills';
import Footer from './components/Footer';

const Home = () => (
  <Container maxWidth="md">
    <Header />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer/>
    
    {/* Add more components as needed */}
  </Container>
);

const AboutPage = () => (
  <Container maxWidth="md">
    <Header />
    <About />
    <Skills />
    <Footer/>
    {/* Additional content for the About page */}
  </Container>
);

const ProjectsPage = () => (
  <Container maxWidth="md">
    <Header />
    <Projects />
    <Footer/>
    {/* Additional content for the Projects page */}
  </Container>
);

const ContactPage = () => (
  <Container maxWidth="md">
    <Header />
    <Contact />
    <Footer/>
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
