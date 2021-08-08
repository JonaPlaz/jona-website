// == import de React
import React from "react";

// == import sass associé
import "./project.scss";

// == Composant Header
const Project = () => (
  <section className="project">
    <h2>Projet de la Semaine</h2>
    <h3>Lorem ipsum</h3>
    <div className="project-layout">
      <article className="project-description">
        Descritption. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptates nesciunt quidem consequuntur dolorem eum? Minus commodi harum
        perferendis sit, architecto labore nisi qui molestias temporibus vitae
        accusantium numquam cupiditate, dolor perspiciatis enim sequi a repellat
        eos? Maiores architecto voluptas aliquam impedit aut earum asperiores
        doloribus, voluptate excepturi tempore, atque in? Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Laborum aliquid culpa quisquam non
        quis. Fuga amet, debitis nemo blanditiis nam nulla impedit consequatur
        nisi aperiam cupiditate ab ipsa quam aut non explicabo. Neque labore
        fuga reiciendis perspiciatis aspernatur, doloremque nulla eveniet ipsam
        voluptatum? Esse adipisci sapiente cum. Et, magnam ex.
      </article>
      <div className="project-capture"></div>
    </div>
  </section>
);

// == export par défaut
export default Project;
