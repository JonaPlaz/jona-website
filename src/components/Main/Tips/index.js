// == import de React
import React from "react";

// == import sass associé
import "./tips.scss";

// == Composant Header
const Tips = () => (
  <section className="sectionTips">
    <h2>Tips</h2>
    <h3>Lorem Ipsum Code</h3>
    {/* ajouter un petit paragraphe annocant un tips aléatoire par jour */}
    <div className="codeSnippet homeCodeSnippet">
      <code>
          const Lorem = (ipsum dolor) => (
              sit amet, consectetur adipiscing elit. Cras
              ultricies turpis et dui blandit, mollis fringilla ligula ullamcorper. Vestibulum magna
          )
      </code>
    </div>
  </section>
);

// == export par défaut
export default Tips;
