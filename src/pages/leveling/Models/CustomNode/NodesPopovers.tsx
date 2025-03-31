import React from "react";
import {Popover} from "rsuite";


export const NodePopover = (id, color) => {
  return(
    <Popover title={<div>123</div>}>
        <div style={{width: 180}}>
          {/* <img src={icons[i]} style={{width: 130, height: 130, marginLeft: 25}}/> */}
          <p style={{textAlign: "center"}}>{description[id]}</p>
        </div>
    </Popover>
  );
}

const description = {
  v1:
  "Игрок получает половину сердечка",
  v2:
  "Игрок получает половину сердечка",
  v3:
  "Игрок получает половину сердечка",
  v4:
  "Игрок получает половину сердечка",
  v5:
  "Игрок получает половину сердечка",
  v6:
  "Игрок получает половину сердечка",
}