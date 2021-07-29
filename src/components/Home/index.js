// == import de React
import React from "react";

// == import sass associé
import "./home.scss";

// == import components
import Tips from './Tips'
import Bio from './Bio'
import Project from './Project'
import Skills from './Skills'


// == Composant Header
const Home = () => (
  <main className="home">
    <Tips />
    <Bio />
    <Project />
    <Skills />
  </main>
);

// == export par défaut
export default Home;
