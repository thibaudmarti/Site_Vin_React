import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <h1>Site de vente (nom a trouver)</h1>
      <ul>
        <NavLink to="/">
          <li>Pourquoi ce site ?</li>
        </NavLink>
        <NavLink to="/">
          <li>Boutique en ligne</li>
        </NavLink>
        <NavLink to="/">
          <li>Les vignerons</li>
        </NavLink>
        <NavLink to="/">
          <li>Conditions générales de vente</li>
        </NavLink>
        <NavLink to="/">
          <li>Contactez nous</li>
        </NavLink>
        {/* A ENLEVER POUR LA MISE EN PRODUCTION */}
        <NavLink to="/gestion-de-la-cave">
          <li>Gestion de la cave </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
