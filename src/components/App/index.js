// == Import npm
import React from "react";

// == Import
import "./styles.scss";

// == Import components
import Subtitle from "src/containers/Subtitle";
import Header from "src/containers/Header";
import Home from "src/containers/Home";
import Footer from "src/containers/Footer";

// == Composant
const App = () => (
  <>
    <Header />
    <Subtitle />
    <Home />
    <Footer />
  </>
);

// == Export
export default App;
