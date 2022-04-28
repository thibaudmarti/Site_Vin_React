import axios from "axios";
import React, { useEffect, useState } from "react";
import WineCard from "./WineCard";
import WineHeadFilter from "./WineHeadFilter";

const WineContainer = () => {
  const [wines, setWines] = useState(null);

  useEffect(() => {
    const getWines = async () => {
      await axios.get(`http://localhost:4000/api/wine/`).then((res) => {
        console.log(res.data);
        return setWines(res.data);
      });
    };

    getWines();
  }, []);

  return (
    <div>
      {wines && <WineHeadFilter wines={wines} />}
      {wines &&
        wines.map((wine) => {
          return <WineCard wine={wine} key={wine._id} />;
        })}
    </div>
  );
};

export default WineContainer;
