import React from "react";
import { Stack } from "rsuite";
import { StatsItem } from "./StatsItem";

function moneyTostring(income){
  if(income >= 1000 && income < 1000_000){
    return `+${(income/1000).toFixed(1)}K`
  }else if(income >= 1000_000){
    return `+${(income/1000_000).toFixed(1)}M`
  }
  return `$+{income}`
};

export const NationStats = ({stats}) => {
  const stat= [stats.science, stats.culture, moneyTostring(stats.income), `${stats.taxes}%`, stats.population]

  return(
    <div style={{marginTop: 20, marginLeft: 12}}>
      <h5 style={{color: "gray"}}>Показатели:</h5>
      <Stack spacing={20} style={{marginTop: 12}}>
        {itemIds.map(i => (
          <StatsItem i={i} key={i} stat={stat[i]}/>
        ))}
      </Stack>
    </div>

  );
}

const itemIds = [0, 1, 2, 3, 4]

export const main = ({
  
})