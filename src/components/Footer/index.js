// == import de React
import React from "react";

// == import sass associé
import "./footer.scss";

// == Composant Header
const Footer = () => (
  <footer className="footer">
    <ul>
      <li>
        <a href="#">Jonathan Plazanet</a>
      </li>
      <li>
        <a href="#">jplazanet@hotmail.com</a>
      </li>
      <li>
        <a href="#">Paris</a>
      </li>
    </ul>
    <ul>
      <li>
        <a href="#">Linkedin</a>
      </li>
      <li>
        <a href="#">Twitter</a>
      </li>
      <li>
        <a href="#">Youtube</a>
      </li>
    </ul>
    <ul>
      <li>
        <a href="#">GitHub</a>
      </li>
      <li>
        <a href="#">Codepen</a>
      </li>
    </ul>
  </footer>
);

// == export par défaut
export default Footer;
