import React, { useState } from "react";
import axios from "axios";

const WineForm = () => {
  const [name, setWineName] = useState("");
  const [region, setWineRegion] = useState("");
  const [appellation, setWineAppellation] = useState("");
  const [format, setWineFormat] = useState("");
  const [color, setWineColor] = useState("");
  const [domain, setWineDomain] = useState("");
  const [year, setWineYear] = useState("");
  const [quantity, setWineQuantity] = useState("");
  const [guard, setWineGuard] = useState("");
  const [grape, setWineGrape] = useState("");
  const [label, setWineLabel] = useState("");
  const [degree, setWineDegree] = useState("");
  const [description, setWineDescription] = useState("");
  const [imageUrl, setWineImage] = useState("");
  const [price, setWinePrice] = useState("");

  const handleWineForm = async (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: `http://localhost:4000/api/wine/addWine`,
      data: {
        name,
        region,
        appellation,
        format,
        color,
        domain,
        year,
        quantity,
        guard,
        grape,
        label,
        degree,
        description,
        imageUrl,
        price,
      },
    }).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <form action="" onSubmit={handleWineForm} id="wine-form">
      <label htmlFor="name">Nom du vin</label>
      <br />
      <input
        type="text"
        name="name"
        id="name"
        onChange={(e) => setWineName(e.target.value)}
        value={name}
      />
      <br />
      <label htmlFor="region">Région</label>
      <br />
      <input
        type="text"
        name="region"
        id="region"
        onChange={(e) => setWineRegion(e.target.value)}
        value={region}
      />
      <br />
      <label htmlFor="appellation">Appellation</label>
      <br />
      <input
        type="text"
        name="appellation"
        id="appellation"
        onChange={(e) => setWineAppellation(e.target.value)}
        value={appellation}
      />
      <br />
      <label htmlFor="format">Format</label>
      <br />
      <input
        type="text"
        name="format"
        id="format"
        onChange={(e) => setWineFormat(e.target.value)}
        value={format}
      />
      <br />
      <label htmlFor="color">Couleur</label>
      <br />
      <input
        type="text"
        name="color"
        id="color"
        onChange={(e) => setWineColor(e.target.value)}
        value={color}
      />
      <br />
      <label htmlFor="domain">Domaine</label>
      <br />
      <input
        type="text"
        name="domain"
        id="domain"
        onChange={(e) => setWineDomain(e.target.value)}
        value={domain}
      />
      <br />
      <label htmlFor="year">Millésime</label>
      <br />
      <input
        type="text"
        name="year"
        id="year"
        onChange={(e) => setWineYear(e.target.value)}
        value={year}
      />
      <br />
      <label htmlFor="quantity">Quantité</label>
      <br />
      <input
        type="text"
        name="quantity"
        id="quantity"
        onChange={(e) => setWineQuantity(e.target.value)}
        value={quantity}
      />
      <br />
      <label htmlFor="guard">Garde</label>
      <br />
      <input
        type="text"
        name="guard"
        id="guard"
        onChange={(e) => setWineGuard(e.target.value)}
        value={guard}
      />
      <br />
      <label htmlFor="grape">Cépage</label>
      <br />
      <input
        type="text"
        name="grape"
        id="grape"
        onChange={(e) => setWineGrape(e.target.value)}
        value={grape}
      />
      <br />
      <label htmlFor="label">Mode de production</label>
      <br />
      <input
        type="text"
        name="label"
        id="label"
        onChange={(e) => setWineLabel(e.target.value)}
        value={label}
      />
      <br />
      <label htmlFor="degree">Degrés d'alcool</label>
      <br />
      <input
        type="text"
        name="degree"
        id="degree"
        onChange={(e) => setWineDegree(e.target.value)}
        value={degree}
      />
      <br />
      <label htmlFor="description">Description du vin</label>
      <br />
      <input
        type="text"
        name="description"
        id="description"
        onChange={(e) => setWineDescription(e.target.value)}
        value={description}
      />
      <br />
      <label htmlFor="imageUrl">Photo du vin</label>
      <br />
      <input
        type="file"
        name="imageUrl"
        id="imageUrl"
        onChange={(e) => setWineImage(e.target.value)}
        value={imageUrl}
      />
      <br />
      <label htmlFor="price">Prix</label>
      <br />
      <input
        type="text"
        name="price"
        id="price"
        onChange={(e) => setWinePrice(e.target.value)}
        value={price}
      />
      <br />
      <input type="submit" value="Envoyer" />
    </form>
  );
};

export default WineForm;
