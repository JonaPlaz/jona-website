// == import de React
import React from "react";

// == import sass associé
import "./tips.scss";

// == Composant Header
const Tips = () => (
  <section className="sectionTips">
    <p>
      Un conseil, un petit bout de code, un cheatSheet par jour, pour progresser
      ensemble.
    </p>
    <div className="tipsBlocs">
      <div className="tipsTitle">
        <h2>Tips</h2>
        <h3>Langage</h3>
        <h4>Lorem Ipsum Code</h4>
      </div>
      <div className="homeCodeSnippet">
        <code className="codeSnippet">
          const Lorem = (ipsum dolor) => ( sit amet, consectetur adipiscing
          elit. Cras ultricies turpis et dui blandit, mollis fringilla ligula
          ullamcorper. Vestibulum magna )
        </code>
        <button className="tipsCopyButton">Copy</button>
      </div>
    </div>
  </section>
);

// == export par défaut
export default Tips;
