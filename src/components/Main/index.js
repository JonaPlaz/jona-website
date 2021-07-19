// == import de React
import React from "react";

// == import sass associé
import "./main.scss";

// == import components
import Tips from './Tips'
import Bio from './Bio'
import Project from './Project'
import Skills from './Skills'


// == Composant Header
const Main = () => (
  <main className="main">
    <Tips />
    <Bio />
    <Project />
    <Skills />
  </main>
);

// == export par défaut
export default Main;
