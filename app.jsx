import React, { useState, lazy, Suspense } from "react";

// Lazy loading untuk komponen
const Header = lazy(() => import("./components/Header"));
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const [currentSection, setCurrentSection] = useState("about");

  
  const renderSection = () => {
    switch (currentSection) {
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {/* Header yang dapat mengubah section */}
        <Header setCurrentSection={setCurrentSection} />
        <main>
          {/* Hanya section yang sedang dipilih yang akan dirender */}
          {renderSection()}
        </main>
        <Footer />
      </Suspense>
    </div>
  );
}

import { Helmet } from "react-helmet";

const App = () => {
  return (
    <div>
      <Helmet>
        <title>My Portfolio - Danu</title>
        <meta name="description" content="This is Danu's portfolio page." />
      </Helmet>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};
import { Helmet } from 'react-helmet';

const App = () => {
  return (
    <div>
      <Helmet>
        <title>My Portfolio - Danu</title>
        <meta name="description" content="This is Danu's portfolio page." />
      </Helmet>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
