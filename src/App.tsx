import React from 'react';
import Header from './components/Header';
import ExperienceSummary from './components/ExperienceSummary';
import Education from './components/Education';
import Certifications from './components/Certifications';
import AreasOfExpertise from './components/AreasOfExpertise';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle';

const App: React.FC = () => {
  return (
    <div className="app">
      <DarkModeToggle />
      <Header />
      <ExperienceSummary />
      <Education />
      <Certifications />
      <AreasOfExpertise />
      <Skills />
      <WorkExperience />
      <Footer />
    </div>
  );
};

export default App;