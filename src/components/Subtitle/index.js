// == import de React
import React from "react";

// == import sass associé
import "./subtitle.scss";

// == import photo d'identité
import jonaPic from '../../assets/pics/Jona_photo_v4.jpg';

// == Composant Header
const Subtitle = () => (
  <div className="subtitle">
    <h1 className="subtitle-title">PORTFOLIO</h1>
    {/* <img className="subtitle-pic" src={jonaPic} alt="Jonathan Plazanet pic id" /> */}
  </div>
);

// == export par défaut
export default Subtitle;
