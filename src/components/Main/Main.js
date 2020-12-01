import React from "react";
import "../../App.css";
import BgMain from "../BgMain/BgMain";
import Gammes from "../Gammes/Gammes";
import Espace from "../Espace/Espace";
import Realisation from "../Realisation/Realisation";
import Informations from "../Informations/Informations";
import Footer from "../Footer/Footer";
import Magazin from "../Magazin/Magazin";
function Main() {
  return (
    <div className="App">
      <BgMain />
      <Gammes />
      <Espace />
      <Realisation />
      <Informations />
      <Magazin />
      <Footer />
    </div>
  );
}

export default Main;