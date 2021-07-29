// on importe connect et notre composant
import { connect } from 'react-redux';
import Subtitle from 'src/components/Subtitle';
// import {  } from 'src/actions';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
});

// on aura peut-être par la suite besoin de dispatch mais pas pour l'instant
const mapDispatchToProps = (dispatch) => ({
  
});

// on exporte ce que nous renvoie connect, c'est à dire le composant enrichi de props
// on passe à connect nos fonctions pour préparer les objets de props puis le composant
export default connect(mapStateToProps, mapDispatchToProps)(Subtitle);