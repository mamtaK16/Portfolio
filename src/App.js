import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import ExperienceDetail from './components/ExperienceDetail';

// Main Home component that contains all sections
const Home = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Contact />
    </div>
  );
};

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="bg-gradient-to-br from-white via-accent to-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/experience/:id" element={<ExperienceDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App; 