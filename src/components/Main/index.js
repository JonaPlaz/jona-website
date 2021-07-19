// == import de React
import React from "react";

// == import sass associé
import "./main.scss";

// == import components
import Tips from './Tips'
import Skills from './Skills'
import Project from './Project'

// == Composant Header
const Main = () => (
  <main className="main">
    <Tips />
    <Project />
    <Skills />
  </main>
);

// == export par défaut
export default Main;
