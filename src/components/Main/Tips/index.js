// == import de React
import React from "react";

// == import sass associé
import "./tips.scss";

// == Composant Header
const Tips = () => (
  <main>
    <section className="sectionTips">
      <h2>Tips</h2>
      <h3>Lorem Ipsum Code</h3>
      <div className="codeSnippet">
        <code>
            const Lorem = (ipsum dolor) => (
                sit amet, consectetur adipiscing elit. Cras
                ultricies turpis et dui blandit, mollis fringilla ligula ullamcorper. Vestibulum magna
            )
        </code>
      </div>
    </section>
  </main>
);

// == export par défaut
export default Tips;
