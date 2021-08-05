// == import de React
import React from "react";

// == import sass associé
import "./skills.scss";

// == Composant Header
const Skills = () => (
  <section className="skills">
    <h2>Skills</h2>
    <div className="skillsHardSoft">
      <div className="skillsHard">
        <h3>Hard Skills</h3>
        <div className="skillsFrontBack">
          <div>
            <h4>Front</h4>
            <ul>
              <li>Html</li>
              <li>Css</li>
              <li>Javascript</li>
              <li>React</li>
            </ul>
          </div>
          <div>
            <h4>Back</h4>
            <ul>
              <li>Php</li>
              <li>Lumen</li>
              <li>Symfony</li>
              <li>MySql</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="skillsSoft">
        <h3>Soft Skills</h3>
        <ul>
          <li>Opquast</li>
          <li>Autonomie</li>
          <li>Détermination</li>
          <li>Sociable</li>
        </ul>
      </div>
    </div>
  </section>
);

// == export par défaut
export default Skills;
