import React from "react";
import { useState } from "react";
import "./styles.css";

import { InfoBlock } from "./InfoBlock/InfoBlock";
import { CharacterBlock } from "./CharacterBlock/CharacterBlock";
import { NationBlock } from "./NationBlock/NationBlock";

export const Profile = () => {
  const [infoBlockData, setInfoBlockData] = useState({
    progress: { level: 322, exp: 2369, percent: 79 },
    user: {
      username: "merousss",
      role: "admin",
      skin: "XnetLondon",
      status: "online",
      decency: 880,
    },
  });

  const [nationData, setNationData] = useState({
    progress: { level: 3, exp: 400, percent: 55 },
    nation: { nation_id: 1, name: "Государство Хистарикуп" },
    stats: { science: 24, culture: 8, income: 52525, taxes: 5, population: 12 },
  });

  const [characterData, setCharacterData] = useState({
    skin: "XnetLondon",
    name: "merousss",
    stats: {
      vitality: 6,
      agility: 7,
      strength: 8,
      intelligence: 9,
    }
  });

  return (
    <div
      style={{
        padding: "6px 0px 0px 24px",
        display: "grid",
        gridTemplateRows: "183px 0px",
        gridTemplateAreas: '"first third" "second third"',
        gridTemplateColumns: "1fr 1fr auto",
        gridGap: 20,
      }}
    >
      <InfoBlock data={infoBlockData} />

      <div className="pr-under-container">
        <NationBlock data={nationData} />
      </div>

      <CharacterBlock data={characterData}/>
    </div>
  );
};
