import React, { useEffect, useState } from "react";
import RegionButton from "./RegionButton";

const WineHeadFilter = ({ wines }) => {
  const [winesRegion, setWinesRegion] = useState("");

  //   const getWinesRegion = () => {
  //     const winesRegion = [];
  //     for (let i = 0; i < wines.length; i++) {
  //       if (wines[i].region != null || wines[i].region != undefined) {
  //         console.log(wines[i].region);
  //         winesRegion.push(wines[i].region);
  //       } else {
  //         console.log(0);
  //       }
  //     }
  //     console.log(winesRegion);

  //   const winesRegionD = [...new Set(winesRegion)]; // enlever les doublons
  //   console.log(winesRegionD);
  //   return winesRegionD;
  //   };

  useEffect(() => {
    const getWinesRegion = () => {
      const winesArrayRegion = [];
      wines.forEach((wine) => {
        if (wine.region) {
          winesArrayRegion.push(wine.region);
        }
      });
      const winesRegionD = [...new Set(winesArrayRegion)]; // enlever les doublons

      return setWinesRegion(winesRegionD);
    };

    getWinesRegion();
  }, []);

  return (
    <div>
      <h1>WineHeadfilter</h1>
      <p>{wines[0].name}</p>
      {winesRegion &&
        winesRegion.map((wineRegion) => {
          return <RegionButton region={wineRegion} key={wineRegion} />;
        })}
    </div>
  );
};

export default WineHeadFilter;
