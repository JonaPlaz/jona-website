// == import de React
import React from "react";

// == import sass associé
import "./main.scss";

// == import components
import Skills from './Skills'
import Tips from './Tips'

// == Composant Header
const Main = () => (
  <main className="main">
    <Tips />
    <Skills />
  </main>
);

// == export par défaut
export default Main;
