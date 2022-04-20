import React from "react";

const WineCard = ({ wine }) => {
  return (
    // <a href=""></a>
    <div className="wine-card">
      {/* <img src="../../public/" alt="Wine pic" /> */}
      <h3>{wine.name}</h3>
      <p className="wine-year">{wine.year}</p>
      {wine.domain && <p className="wine-domain">{wine.domain}</p>}
      {wine.quantity !== 0 && <p className="wine-price">{wine.price}€</p>}
      <button>Supprimer de l'espace de vente</button>
    </div>
  );
};

export default WineCard;
